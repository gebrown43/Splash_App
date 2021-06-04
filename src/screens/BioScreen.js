import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import config from 'react-native-config';

import ImageSquare from '../components/ImageSquare';

const screenWidth = Dimensions.get('window').width;

const BioScreen = ({route}) => {
  const {photo} = route.params;
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    loadUserPhotos();
  }, []);

  const loadUserPhotos = () => {
    fetch(
      `https://api.unsplash.com/users/${photo.user.username}/photos/?client_id=${config.UNSPLASH_APP_CLIENT_ID}&page=${pageNumber}`,
    )
      .then(response => response.json())
      .then(data => {
        const photosArray = [...photos, ...data];
        setPhotos(photosArray);
        setPageNumber(pageNumber + 1);
      })
      .catch(e => {
        alert(e.message);
      });
  };
  const renderPhoto = ({item}) => {
    return (
      <View style={styles.imageSquareContainer}>
        <ImageSquare photo={item} />
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <>
        <ImageBackground
          source={{uri: photo?.urls.regular}}
          style={styles.userCoverImage}>
          <View style={styles.userBioContainer}>
            <Image
              source={{uri: photo?.user.profile_image.large}}
              style={styles.userBioImage}
            />
            <Text style={styles.usernameBio}>{photo?.user.username}</Text>
            <Text style={styles.descriptionBio}>{photo?.user?.bio}</Text>
          </View>
        </ImageBackground>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={photos}
        ListHeaderComponent={renderHeader}
        onEndReached={loadUserPhotos}
        onEndReachedThreshold={0.5}
        renderItem={renderPhoto}
        numColumns={3}
        columnWrapperStyle={styles.columns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  descriptionBio: {
    fontSize: 20,
    textAlign: 'center',
  },
  columns: {
    padding: 10,
  },
  usernameBio: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 24,
    paddingBottom: 10,
  },
  userBioImage: {
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
  },
  userBioContainer: {
    paddingTop: '35%',
    paddingBottom: 25,
    width: '90%',
    alignItems: 'center',
    flex: 1,
  },
  userCoverImage: {
    position: 'relative',
    width: '100%',
    flex: 1,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSquareContainer: {
    width: screenWidth / 3,
  },
});
export default BioScreen;
