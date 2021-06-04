import React from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ImageSquare = ({photo}) => {
  const navigation = useNavigation();

  const onImagePress = () => {
    navigation.push('Image', {photo});
  };

  return (
    <View style={styles.container} key={photo.id}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.photoContainer} onPress={onImagePress}>
        <Image style={styles.image} source={{uri: photo?.urls.regular}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
  },
  photoContainer: {
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 196,
    borderRadius: 4,
  },
});

export default ImageSquare;
