import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Heart from '../assets/Heart';

const ImageVerticalIndex = ({photo}) => {
  return (
    <View style={styles.photoContainer} key={photo.id}>
      <Image style={styles.image} source={{uri: photo?.urls.regular}} />
      <View style={styles.bottomToolbar}>
        <Image
          style={styles.avatar}
          source={{uri: photo?.user.profile_image.small}}
        />

        <Text style={styles.username}>{photo?.user.username}</Text>
        <View style={styles.heartIcon}>
          <Heart />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 14,
    paddingTop: 10,
  },
  image: {
    width: '90%',
    height: 196,
    borderRadius: 4,
  },
  bottomToolbar: {
    position: 'absolute',
    bottom: 0,
    height: 34,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  avatar: {
    height: 23,
    width: 23,
    borderRadius: 16,
    marginLeft: 7,
  },
  username: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    fontSize: 13,
    color: '#FFF',
    paddingLeft: 6,
    flex: 1,
  },
  heartIcon: {
    marginRight: 12,
  },
});

export default ImageVerticalIndex;
