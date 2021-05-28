import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import config from 'react-native-config';
import Reactotron from 'reactotron-react-native';

import VerticalImageIndex from '../components/VerticalImageIndex';

const HomeScreen = () => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = () => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${config.UNSPLASH_APP_CLIENT_ID}&page=${pageNumber}`,
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

  const renderPhotos = ({item}) => {
    return <VerticalImageIndex photo={item} />;
  };

  return (
    <FlatList
      data={photos}
      style={styles.flatList}
      onEndReached={loadPhotos}
      onEndReachedThreshold={0.5}
      renderItem={renderPhotos}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    display: 'flex',
    backgroundColor: '#092235',
  },
});

export default HomeScreen;
