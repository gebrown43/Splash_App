import React from 'react';
import {View, StatusBar, ImageBackground, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ShareButton from '../components/ShareButton';
import ImageToolbar from '../components/ImageToolbar';

const ImageScreen = ({route}) => {
  const navigation = useNavigation();

  const {photo} = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <ShareButton data={photo} />,
    });
  }, [navigation, photo]);

  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: photo?.urls.regular}} style={styles.photo}>
        <StatusBar barStyle="light-content" />
        <ImageToolbar photo={photo} fullScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  photo: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ImageScreen;
