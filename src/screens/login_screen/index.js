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
  TouchableOpacity,
} from 'react-native';
class LoginScreenComponent extends React.Component {
  state = {
    username: '',
    password: '',
    titleText: 'Welcome Back,',
    count: 0,
  };

  onChangeUsername = username => {
    this.setState({username});
  };

  onChangePassword = password => {
    this.setState({password});
  };

  onPress = () => {
    this.setState({count: this.state.count+1})
  }

  render() {
    console.log(this.state.username);
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/Splash_background.png')}
          style={styles.backgroundImage}>
          <View>
            <Text style={styles.titleText}>Welcome Back,</Text>
            <TextInput
              style={styles.input}
              onChangeText={this.onChangeUsername}
              value={this.state.username}
              placeholder="Email"
              placeholderTextColor="white"
            />
            <TextInput
              style={styles.input}
              onChangeText={this.onChangePassword}
              value={this.state.password}
              placeholder="Password"
              placeholderTextColor="white"
            />
          </View>
          <View sytle={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}
          onPress={this.onPress}>
            <Text style={styles.buttonText}>
              Sign In
            </Text>
          </TouchableOpacity>
          </View>
          <View style={styles.bottom}>
          <View style={styles.bottomCenter}>
          <Text style={styles.baseText}>
            Don't have an account? {" "}
            <Text style={styles.innerText}>
            Sign Up
          </Text>
          </Text>
          </View>
          </View>
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
  titleText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 36,
    lineHeight: 43.56,
    paddingTop: 231,
    paddingBottom: 77,
    fontWeight: '700',
    textAlign: 'left',
    color: 'white',
    paddingLeft: 21,
  },
  baseText: {
    fontFamily: 'HelveticaNeue',
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'normal',
    textAlign: 'left',
    color: 'white',
    textAlign: 'center'
  },
  innerText: {
    fontFamily: 'HelveticaNeue',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    textDecorationLine: 'underline'
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 76,
  },
  bottomCenter: {
    justifyContent: 'center'
  },
  input: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    fontWeight: '700',
    backgroundColor: 'transparent',
    color: 'white',
    height: 40,
    margin: 12,
    borderBottomColor: 'white',
    borderBottomWidth: 4,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    width: 234,
    height: 46,
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginTop: 77
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  buttonText: {
    fontFamily: 'HelveticaNeue-CondensedBold',
    fontSize: 18,
    lineHeight: 21.47,
    fontWeight: 'normal',
    textAlign: 'center',
  }
});

export default LoginScreenComponent;
