import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Heart from '../assets/Heart';

const ImageToolbar = ({photo, fullScreen}) => {
  const navigation = useNavigation();

  const onUserPress = () => {
    navigation.navigate('Bio', {photo});
  };

  return (
    <View
      style={
        fullScreen
          ? {
              ...styles.bottomToolbar,
              ...styles.bottomToolbarFullSize,
            }
          : styles.bottomToolbar
      }>
      <Image
        style={styles.avatar}
        source={{uri: photo?.user.profile_image.small}}
      />

      <TouchableOpacity style={styles.usernameContainer} onPress={onUserPress}>
        <Text style={styles.username}>{photo?.user.username}</Text>
      </TouchableOpacity>
      <View style={styles.heartIcon}>
        <Heart />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomToolbar: {
    position: 'absolute',
    bottom: 0,
    height: '15%',
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  bottomToolbarFullSize: {
    width: '100%',
    height: '10%',
    paddingBottom: 5,
  },
  avatar: {
    height: 23,
    width: 23,
    borderRadius: 16,
    marginLeft: 7,
  },
  usernameContainer: {
    fontFamily: 'Helvetica Neue',
    fontWeight: '300',
    fontSize: 13,
    color: '#FFF',
    paddingLeft: 6,
    flex: 1,
  },
  username: {
    color: '#FFF',
  },
  heartIcon: {
    marginRight: 12,
  },
});

export default ImageToolbar;
