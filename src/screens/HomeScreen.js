import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import config from 'react-native-config';

import VerticalImageIndex from '../components/VerticalImageIndex';

const HomeScreen = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${config.UNSPLASH_APP_CLIENT_ID}`,
    )
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      });
  }, []);

  const renderPhotos = ({item}) => {
    return <VerticalImageIndex photo={item} />;
  };

  return (
    <FlatList data={photos} style={styles.flatList} renderItem={renderPhotos} />
  );
};

const styles = StyleSheet.create({
  flatList: {
    display: 'flex',
    backgroundColor: '#092235',
  },
});

export default HomeScreen;
