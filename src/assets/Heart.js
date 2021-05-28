import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const Heart = ({color, size = 25}) => {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        stroke="#FFF"
        strokeWidth="2"
        viewBox="0 0 24 24">
        <Path
          fill={color}
          d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
        />
      </Svg>
    </View>
  );
};

export default Heart;
