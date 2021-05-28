import React, {useState} from 'react';
import {
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
} from 'react-native';
import image from '../assets/login_background.png';

const Registration = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegistrationPress = () => {
    console.log(name, email, password);
  };

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <StatusBar barStyle="light-content" />
        <View style={styles.bodyContainer}>
          <Text style={styles.header}>Welcome Back, Will</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              placeholderTextColor="#FFF"
              onChangeText={text => setName(text)}
              value={name}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#FFF"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#FFF"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>

          <TouchableOpacity
            style={styles.registrationBtn}
            onPress={() => onRegistrationPress()}>
            <Text style={styles.registrationText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer_text_container}>
          <Text style={styles.footer_text}>Already have an account?</Text>
          <Text style={styles.footer_btn} onPress={onFooterLinkPress}>
            Sign In
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },

  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: 36,
    lineHeight: 44,
    color: '#FFFEFE',
    paddingBottom: 100,
  },

  bodyContainer: {
    flex: 1,
    width: '100%',
    marginTop: 240,
    alignItems: 'center',
  },

  inputView: {
    color: '#FFF',
    borderBottomColor: '#FFF',
    borderBottomWidth: 4,
    width: '80%',
    height: 45,
    marginBottom: 20,
  },

  textInput: {
    height: 50,
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 22,
    color: '#FFF',
  },

  footer_text_container: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  footer_btn: {
    fontWeight: 'bold',
    color: '#FFF',
    height: 30,
    marginLeft: 5,
    textDecorationLine: 'underline',
  },

  footer_text: {
    height: 30,
    color: '#FFF',
  },

  registrationText: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 27,
    textAlign: 'center',
  },

  registrationBtn: {
    width: '60%',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FFF',
  },
});
export default Registration;
