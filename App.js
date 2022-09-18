import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import data from './attractions.json';


const chicagoIcon = require('./Images/chicago.png');

export default class App extends React.Component {

  renderRow({attraction}) {
    return (
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <Image source={chicagoIcon} style={styles.icon} />
        </View>
        <View style={styles.location}>
          <Text style={styles.attractionName}>Art Institute of Chicago</Text>
          <Text style={styles.address}>111 S Michigan Ave</Text>
          <Text style={styles.website}>artic.edu</Text>
        </View>
      </View>
    );
  }
  
  render() {
    return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>City Guide</Text>
      <FlatList data={data} renderItem={this.renderRow} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ede2e0',
  },
  title: {
    backgroundColor: '#1c7da5',
    color: '#ede2e0',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingTop: 40,
    textAlign: 'center',
  },
  row: {
    borderColor: '#7b7983',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    backgroundColor: '#1f3243',
    borderColor: '#1f3243',
    height: 70,
    width: 70,
    alignItems: 'center',
    borderRadius: 35,
    justifyContent: 'center',
  },
  icon: {
    height: 45,
    width: 45,
  },
  attractionName: {
    color: '#122737',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    color: '#3c4f62',
    fontSize: 16,
    marginBottom: 5,
  },
  website: {
    color: '#3c4f62',
    fontSize: 16,
    fontStyle: 'italic',
  },
  location: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  }
});
