import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  TextInput,
  View,
  Button,
  Platform,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
class LoginScreenComponent extends React.Component {
    state = {
        username: '',
        password: '',
    }

    onChangeUsername = username => {
        this.setState({username})
    }

    onChangePassword = password => {
        this.setState({password})
    }

  render() {
    console.log(this.state.username)
    return (
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assets/images/Splash_background.png')}
            style={styles.backgroundImage}>
            <View>
            <TextInput
            style={styles.input}
            onChangeText={this.onChangeUsername}
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor='black'
            />
            <TextInput
            style={styles.input}
            onChangeText={this.onChangePassword}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="black"
            /></View>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default LoginScreenComponent;
