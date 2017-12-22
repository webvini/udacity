import React, { Component } from 'react'
import { View, Text, TextInput, Button, AsyncStorage } from 'react-native'

import { styles } from './styles'

class Card extends Component {

  state = {
    title: '',
    allDecks: []
  }

  componentDidMount() {
    const { state } = this.props.navigation

    this.setState({
      title: state.params.title
    }, () => {
      this.getAllDecks()
    })
  }

  isNewDeck = () => {
    const { allDecks, title } = this.state

    Object.values(allDecks).map((deck) => {
      if(deck.title === title) {
        console.log('Opa! já temos esse deck')
      }else{
        console.log('Deck novo criado com sucesso')
      }
    })
  }

  getAllDecks = () => {
    AsyncStorage.getItem('decks').then((decks) => {
      this.setState({
        allDecks: JSON.parse(decks)
      }, () => {
        this.isNewDeck()
      })
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