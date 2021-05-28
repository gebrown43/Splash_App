import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import VerticalImageIndex from '../components/VerticalImageIndex';

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
      style={styles.flatList}
      renderItem={({item}) => {
        return <VerticalImageIndex photo={item} />;
      }}
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
