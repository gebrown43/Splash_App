import React, {useContext} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {AuthContext} from '../lib/context/AuthContext/AuthContextProvider';
import Heart from '../assets/Heart';
import Profile from '../assets/Profile';

// TODO: Connect correct links to icons.
const HeaderIcons = () => {
  const {signOut} = useContext(AuthContext);

  const onSignoutPress = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.heartContainer}
        onPress={() => onSignoutPress()}>
        <Heart />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSignoutPress()}>
        <Profile />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
  },
  heartContainer: {
    paddingRight: 20,
  },
});

export default HeaderIcons;
