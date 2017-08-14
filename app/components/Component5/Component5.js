import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight} from 'react-native';

const users = [
  {name: 'John Doe'},
  {name: 'Nivag Flow'},
  {name: 'Steve Smith'},
  {name: 'Janet Peppercorn'}
];

export default class Component5 extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      userDataSource: ds
    };
  }

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response)
        });
      });
  }

  componentDidMount() {
    this.fetchUsers();
  }

  onPress(user) {
    this.props.navigator.push({
      id: 'component6',
      user: user
    });
  }
}

  renderRow(user, sectionId, rowId, highlightRow) {
    return (
      <TouchableHighlight onPress={() => {this.onPress(user)}}>
        <View style={styles.row}>
          <Text style={styles.rowText}>{user.name}: {user.email}</Text>
        </View>
      </TouchableHighlight>
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
    width: 1000,
    height: 800
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
    marginBottom: 3
  },
  rowText: {
    flex: 1,
    color: 'green'
  }
});

AppRegistry.registerComponent('Component5', () => Component4);
