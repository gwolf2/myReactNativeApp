import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';

import Component2 from './app/components/Component2/Component2';

export default class myReactNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          <Component2 />
        </Text>
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
  }
});

AppRegistry.registerComponent('myReactNativeApp', () => myReactNativeApp);
