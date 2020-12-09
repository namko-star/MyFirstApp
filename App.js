import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  render() {
    return <Button color = "#00FFE3" title="click me!"/>
  }
}

export default class App extends Component {
  render() {
    return (
      <View style = {{marginTop:400}}>
          <RedButton/>
          <Text>My First App</Text>
      </View>
    )
  }
}
