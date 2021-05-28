import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Arrow from '../assets/Arrow';

const BackButton = () => {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
      <Arrow />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 20,
  },
});
export default BackButton;
