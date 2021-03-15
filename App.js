import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
class BlueButton extends Component{
  render(){
    return(
      <Button title="This is a Blue Button" color="blue"></Button>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{marginTop:50}}>My first App</Text>
        <Button title="Click Here" color="red"></Button>
        <BlueButton></BlueButton>
        </View>
    );
  }
}