import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity} from 'react-native';

export default class Component2 extends Component {
  onPress() {
    console.log('Area Pressed')
  }

  onPress2() {
    console.log('Area 2 Pressed')
  }

  render() {
    return (
      <View style={styles.outer}>
        <View style={styles.myView}>
          <Text style={styles.myText}>Hello Gavin</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor="blue"
            >
            <View>
              <Text style={styles.vText}>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity
            onPress={this.onPress2}
            style={styles.v2}
            >
            <View>
              <Text style={styles.vText}>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text style={styles.vText}>View 3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    width: 300,
    height: 400
  },
  myView: {
    backgroundColor: 'blue',
    width: 300,
    height: 20
  },
  myText: {
    color: 'white'
  },
  container: {
    flexDirection: 'row'
  },
  v1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },
  vText: {
    color: 'white'
  }
});

AppRegistry.registerComponent('Component2', () => Component2);
