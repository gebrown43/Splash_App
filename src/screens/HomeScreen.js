import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ImageVerticalIndex from '../components/ImageVerticalIndex';

const HomeScreen = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.unsplash.com/photos/?client_id=Pfsu-9Fcu8eaLxSJSYQlXmxoaS3X90KHGJ8AlSJndnE',
    )
      .then(response => response.json())
      .then(data => {
        setPhotos(data);
      });
  }, []);

  return (
    <FlatList
      data={photos}
      style={styles.scrollView}
      renderItem={({item}) => {
        return <ImageVerticalIndex photo={item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    backgroundColor: '#092235',
  },
});

export default HomeScreen;
