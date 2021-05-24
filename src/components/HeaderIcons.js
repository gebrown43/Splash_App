import React from 'react';
import {StyleSheet, View} from 'react-native';
import Heart from '../assets/Heart';
import Profile from '../assets/Profile';

//TODO: Add padding between icons
const HeaderIcons = () => {
  return (
    <View style={styles.container}>
      <Heart />
      <Profile />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default HeaderIcons;
