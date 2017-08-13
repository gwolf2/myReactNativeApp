import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Component1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Component 1</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    width: 100,
    height: 100
  }
});

AppRegistry.registerComponent('Component1', () => Component1);
