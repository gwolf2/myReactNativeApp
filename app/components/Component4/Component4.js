import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ListView} from 'react-native';

const users = [
  {name: 'John Doe'},
  {name: 'Nivag Flow'},
  {name: 'Steve Smith'},
  {name: 'Janet Peppercorn'}
];

export default class Component4 extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(user) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 200
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3,
    width: 400,
    height: 30
  },
  rowText: {
    flex: 1,
    color: 'purple',
    width: 400,
    height: 30
  }
});

AppRegistry.registerComponent('Component4', () => Component4);
