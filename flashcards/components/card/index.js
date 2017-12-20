import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'

import { styles } from './styles'

class Card extends Component {

  state = {
    allDecks: []
  }

  componentDidMount() {
    const { state } = this.props.navigation

    this.getAllDecks(state.params.title)
  }

  getAllDecks = title => {
    AsyncStorage.getItem("decks").then((value) => {
      this.setState({
        allDecks: JSON.parse(value)
      }, () => {
        const decks = Object.values(this.state.allDecks)
        decks.map((deck) => {
          if (deck.title === title) {
            return
          }
        })
      });
    })
  }

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
          onPress={() => navigation.navigate('card')}
          title="Submit"
        />
      </View>
    )
  }
}

export default Card