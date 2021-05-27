import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AuthProvider from './src/lib/context/AuthContext/AuthContextProvider';

const AppProviders = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

AppRegistry.registerComponent(appName, () => AppProviders);
