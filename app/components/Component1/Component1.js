import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Component1 extends Component {
  constructor(props){
    super();
    this.state = {
      name: 'Gavin',
      showName: true,
      message: props.message
    }
  }

  static defaultProps = {
    message: 'Hi There'
  }

  render() {
    let name = this.state.showName ? this.state.name : '';
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Text>{name}</Text>
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
