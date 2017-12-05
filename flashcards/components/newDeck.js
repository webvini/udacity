import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

class NewDeck extends Component {

  state = {
    disabledButton: true
  }

  nextToStep = () => {
    console.log('ahhaha')
  }

  onChangedText = title => {
    this.setState({
      disabledButton: !title
    })
  }

  render() {
    return (
      <View style={styles.newDeckWrapper}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput
          style={styles.input}
          placeholder="Deck title"
          onChangeText={this.onChangedText}
        />

        <Button
          onPress={this.nextToStep}
          title="Submit"
          disabled={this.state.disabledButton}
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