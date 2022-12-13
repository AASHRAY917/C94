import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class GetRemainder extends React.Component {
  render(){
    return (
      <View>
      <Text>
      Login</Text>
      <TextInput
        style={styles.inputBox}
          placeholder={'Username'}
          onChangeText={(text) => {
            this.setState({ username: text });
          }}
        />

      <TextInput
        style={styles.inputBox}
          placeholder={'Password'}
          onChangeText={(text) => {
            this.setState({ password: text });
          }}
        />
      </View>
      
      
        
    );
  }
}