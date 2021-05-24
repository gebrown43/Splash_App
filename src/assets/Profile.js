import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

// TODO: Fix color issue
const Profile = ({color = '#646464', size = 20}) => {
  return (
    <View>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 8C15 10.2091 13.2091 12 11 12C8.79086 12 7 10.2091 7 8C7 5.79086 8.79086 4 11 4C13.2091 4 15 5.79086 15 8ZM13 8C13 9.10457 12.1046 10 11 10C9.89543 10 9 9.10457 9 8C9 6.89543 9.89543 6 11 6C12.1046 6 13 6.89543 13 8Z"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM2 11C2 13.0902 2.71255 15.014 3.90798 16.5417C5.55245 14.3889 8.14627 13 11.0645 13C13.9448 13 16.5092 14.3531 18.1565 16.4583C19.313 14.9443 20 13.0524 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11ZM11 20C8.84977 20 6.87565 19.2459 5.32767 17.9878C6.59352 16.1812 8.69106 15 11.0645 15C13.4084 15 15.4833 16.1521 16.7538 17.9209C15.1939 19.2191 13.1881 20 11 20Z"
          fill="white"
        />
      </Svg>
    </View>
  );
};

export default Profile;
