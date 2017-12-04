import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class NewDeck extends Component {
  render() {
    return (
      <View style={styles.newDeckWrapper}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newDeckWrapper: {
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  }
})

export default NewDeck