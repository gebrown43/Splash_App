import React from 'react';
import {
    StatusBar,
    Text,
    TextInput,
    View,
    Button,
    ImageBackground,
    StyleSheet,
} from 'react-native';
class LoginScreenComponent extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../assets/images/Splash_background.png')} style={styles.image} >
                <TextInput
            // style={styles.input}
            // onChangeText={onChangeUsername}
            // value={username}
          />
          <TextInput
            // style={styles.input}
            // onChangeText={onChangePassword}
            // value={password}
            // placeholder="Password"
          />
          </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       flexDirection: "column"
   },
   image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
   },
   text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
   },
  });

  export default LoginScreenComponent;