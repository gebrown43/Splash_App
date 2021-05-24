import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, ScrollView} from 'react-native';

import ImageToolbar from '../components/ImageToolbar';

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
    <ScrollView style={styles.scrollView}>
      <StatusBar barStyle="light-content" />

      {photos?.map(photo => (
        <ImageToolbar photo={photo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    display: 'flex',
    backgroundColor: '#092235',
  },
});

export default HomeScreen;
