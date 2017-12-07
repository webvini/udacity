import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'

class NewDeck extends Component {

  state = {
    disabledButton: true
  }

  onChangedText = title => {
    this.setState({
      disabledButton: !title
    })
  }

  render() {

    const { navigation } = this.props

    return (
      <View style={styles.newDeckWrapper}>
        <Text style={styles.title}>What is the title of your new deck?</Text>

        <TextInput
          style={styles.input}
          placeholder="Deck title"
          onChangeText={this.onChangedText}
        />

        <Button
          onPress={() => navigation.navigate('cardCreate')}
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
    color: '#ccc',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})

export default NewDeck