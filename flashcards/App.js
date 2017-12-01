import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Deck from './components/deck'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Deck />
        <Deck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
