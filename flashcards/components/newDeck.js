import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

class NewDeck extends Component {
  onCreate = () => {
    console.log('ahhaha')
  }

  render() {
    return (
      <View style={styles.newDeckWrapper}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput
          style={styles.input}
          placeholder="Deck title"
        />

        <Button
          onPress={this.onCreate}
          title="Submit"
        />
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
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})

export default NewDeck