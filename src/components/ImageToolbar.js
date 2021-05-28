import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Heart from '../assets/Heart';

const ImageToolbar = ({photo, fullScreen}) => {
  return (
    <View
      style={
        fullScreen
          ? {
              ...styles.bottomToolbar,
              ...styles.bottomToolbarFillSize,
            }
          : styles.bottomToolbar
      }>
      <Image
        style={styles.avatar}
        source={{uri: photo?.user.profile_image.small}}
      />

      <Text style={styles.username}>{photo?.user.username}</Text>
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
  bottomToolbarFillSize: {
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

export default ImageToolbar;
