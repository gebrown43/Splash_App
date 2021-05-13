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
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: 'red',
   },
  });

  export default LoginScreenComponent;