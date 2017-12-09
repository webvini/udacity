import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'

import { styles } from './styles'

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
          onPress={() => navigation.navigate('card')}
          title="Submit"
          disabled={this.state.disabledButton}
        />
      </View>
    )
  }
}

export default NewDeck