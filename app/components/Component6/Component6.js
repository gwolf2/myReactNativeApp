import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button} from 'react-native';

export default class Component6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name,
      email: this.props.user.email
    };
  }

  onPress() {
    this.props.navigator.push({
      id: 'component5'
    });
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.row}>{this.state.name}</Text>
          <Text style={styles.row}>{this.state.email}</Text>
        </View>
        <View>
          <Button
            onPress={this.onPress.bind(this)}
            title="Go Back"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  btnStyle: {
  }
});

AppRegistry.registerComponent('Component6', () => Component4);
