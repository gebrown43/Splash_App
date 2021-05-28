import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {decode, encode} from 'base-64';

import {
  HomeScreen,
  ImageScreen,
  LoginScreen,
  RegistrationScreen,
} from './src/screens';
import HeaderIcons from './src/components/HeaderIcons';
import {AuthContext} from './src/lib/context/AuthContext/AuthContextProvider';
import BackButton from './src/components/BackButton';

if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App({navigation}) {
  const {currentUser, currentUserLoading} = useContext(AuthContext);

  if (currentUserLoading) {
    return <></>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {currentUser ? (
          <>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Splash',
                headerStyle: {
                  backgroundColor: '#092235',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 30,
                  paddingBottom: 5,
                },
                headerRight: () => <HeaderIcons navigation={navigation} />,
              }}
            />
            <Stack.Screen
              name="Image"
              component={ImageScreen}
              options={route => ({
                name: '',
                headerTransparent: true,
                headerStyle: {
                  backgroundColor: '#000',
                  opacity: 0.5,
                },
                headerTitle: false,
                headerLeft: () => <BackButton />,
              })}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
