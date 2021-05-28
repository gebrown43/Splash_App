import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Arrow = ({color = '#FFF', size = 25}) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24">
        <Path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </Svg>
    </View>
  );
};

export default Arrow;
