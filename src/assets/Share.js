import React from 'react';
import {View} from 'react-native';
import Svg, {Defs, G, Path, Use} from 'react-native-svg';

const Share = ({color = '#FFF', size = 25}) => (
  <View>
    <Svg height="23" width="28" fill={color}>
      <Defs>
        <Path
          id="path-1"
          opacity="1"
          fill-rule="evenodd"
          d="M4.800000000000023,5.5 C5.000000000000023,5.5 5.100000000000023,5.4 5.200000000000023,5.3 L8.500000000000023,2 L8.500000000000023,16.2 C8.500000000000023,16.5 8.800000000000024,16.8 9.100000000000023,16.8 C9.400000000000022,16.8 9.700000000000022,16.5 9.700000000000022,16.2 L9.700000000000022,2 L13.000000000000023,5.3 C13.200000000000022,5.5 13.600000000000023,5.5 13.800000000000024,5.3 C14.000000000000023,5.1 14.000000000000023,4.7 13.800000000000024,4.5 L9.500000000000025,0.19999999999999993 L9.300000000000024,0 L8.900000000000023,0 C8.800000000000024,0 8.800000000000024,0.09999999999999996 8.700000000000024,0.09999999999999996 L4.300000000000023,4.5 C4.100000000000023,4.7 4.100000000000023,5.1 4.300000000000023,5.3 "
        />
        <Path
          id="path-2"
          opacity="1"
          fill-rule="evenodd"
          d="M17.5,10.199999999999996 C17.4,9.899999999999995 17.2,9.599999999999996 16.9,9.399999999999995 C16.7,9.199999999999996 16.4,8.999999999999995 16.099999999999998,8.799999999999995 C15.799999999999997,8.699999999999996 15.399999999999999,8.599999999999996 15.099999999999996,8.599999999999996 L13,8.599999999999996 C12.7,8.599999999999996 12.4,8.899999999999997 12.4,9.199999999999996 C12.4,9.499999999999995 12.700000000000001,9.799999999999995 13,9.799999999999995 L15.1,9.799999999999995 C15.299999999999999,9.799999999999995 15.5,9.799999999999995 15.6,9.899999999999995 C15.799999999999999,9.999999999999995 15.9,10.099999999999994 16.1,10.199999999999996 C16.200000000000003,10.299999999999995 16.3,10.499999999999996 16.400000000000002,10.599999999999996 C16.500000000000004,10.799999999999995 16.500000000000004,10.999999999999996 16.500000000000004,11.099999999999996 L16.500000000000004,20.299999999999994 C16.500000000000004,20.499999999999993 16.500000000000004,20.699999999999992 16.400000000000002,20.799999999999994 C16.3,20.999999999999993 16.200000000000003,21.099999999999994 16.1,21.199999999999992 C16,21.299999999999994 15.8,21.39999999999999 15.700000000000001,21.499999999999993 C15.500000000000002,21.599999999999994 15.3,21.599999999999994 15.200000000000001,21.599999999999994 L2.6,21.599999999999994 C2.4,21.599999999999994 2.2,21.599999999999994 2.1,21.499999999999993 C1.9000000000000001,21.39999999999999 1.8000000000000003,21.299999999999994 1.6,21.199999999999992 C1.5,21.09999999999999 1.4000000000000001,20.89999999999999 1.3,20.799999999999994 C1.2,20.599999999999994 1.2,20.399999999999995 1.2,20.299999999999994 L1.2,11.099999999999994 C1.2,10.899999999999995 1.2,10.699999999999994 1.3,10.599999999999994 C1.4000000000000001,10.399999999999995 1.5,10.299999999999994 1.6,10.199999999999994 C1.7000000000000002,10.099999999999994 1.9000000000000001,9.999999999999995 2,9.899999999999993 C2.2,9.799999999999994 2.4,9.799999999999994 2.5,9.799999999999994 L4.6,9.799999999999994 C4.8999999999999995,9.799999999999994 5.199999999999999,9.499999999999993 5.199999999999999,9.199999999999994 C5.199999999999999,8.899999999999995 4.999999999999999,8.599999999999994 4.699999999999999,8.599999999999994 L2.6,8.599999999999994 C2.2,8.599999999999994 1.9000000000000001,8.699999999999994 1.6,8.799999999999994 C1.3,8.999999999999993 1,9.199999999999994 0.8,9.399999999999993 C0.6000000000000001,9.599999999999993 0.4,9.899999999999993 0.20000000000000007,10.199999999999994 C0.09999999999999995,10.499999999999995 0,10.899999999999993 0,11.199999999999994 L0,20.399999999999995 C0,20.799999999999994 0.09999999999999995,21.099999999999994 0.20000000000000007,21.399999999999995 C0.30000000000000004,21.699999999999996 0.4999999999999999,21.999999999999996 0.8,22.199999999999996 C1,22.399999999999995 1.3,22.599999999999994 1.6,22.799999999999997 C1.9000000000000001,22.9 2.3,22.999999999999996 2.6,22.999999999999996 L15.1,22.999999999999996 C15.4,22.999999999999996 15.799999999999999,22.899999999999995 16.1,22.799999999999997 C16.400000000000002,22.699999999999996 16.700000000000003,22.499999999999996 16.900000000000002,22.199999999999996 C17.1,21.999999999999996 17.3,21.699999999999996 17.500000000000004,21.399999999999995 C17.600000000000005,21.099999999999994 17.700000000000003,20.699999999999996 17.700000000000003,20.399999999999995 L17.700000000000003,11.199999999999996 "
        />
      </Defs>
      <G opacity="1">
        <G opacity="1">
          <Use href="#path-1" fill={color || 'rgb(0,0,0)'} fill-opacity="1" />
        </G>
        <G opacity="1">
          <Use href="#path-2" fill={color || 'rgb(0,0,0)'} fill-opacity="1" />
        </G>
      </G>
    </Svg>
  </View>
);

export default Share;
