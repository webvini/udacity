import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Deck extends Component {
  render() {
    return (
      <View style={styles.deckWrapper}>
        <Text style={styles.title}>Javascript</Text>
        <Text style={styles.description}>10 card(s)</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckWrapper: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  description: {
    color: '#999',
    textAlign: 'center'
  }
})

export default Deck