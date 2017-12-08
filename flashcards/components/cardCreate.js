import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

class CardCreate extends Component {
  render() {
    return (
      <View style={styles.cardWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Card title"
        />

        <TextInput
          style={styles.input}
          placeholder="Card description"
        />

        <Button
          onPress={() => navigation.navigate('cardCreate')}
          title="Submit"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    flex: 1,
    padding: 20,
  },
  input: {
    color: '#999',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})

export default CardCreate