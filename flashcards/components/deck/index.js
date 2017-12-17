import React, { Component } from 'react'
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native'

import { styles } from './styles'
import { toDeckDetails } from '../../navigation'

class Deck extends Component {

  state = {
    allDecks: []
  }

  initialValues = () => {
    const allDecks = {
      React: {
        title: 'ReactX',
        questions: [
          {
            question: 'What is React?',
            answer: 'A library for managing user interfaces'
          },
          {
            question: 'Where do you make Ajax requests in React?',
            answer: 'The componentDidMount lifecycle event'
          }
        ]
      },
      JavaScript: {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment within which that function was declared.'
          }
        ]
      }
    }

    return allDecks
  }

  componentDidMount() {
    this.setDeck()
  }

  setDeck = value => {
    AsyncStorage.setItem('decks', JSON.stringify(this.initialValues()))

    this.getAllDecks()
  }

  getAllDecks = () => {
    AsyncStorage.getItem("decks").then((value) => {
      this.setState({
        allDecks: JSON.parse(value)
      });
    })
  }

  deckRender = deck => {
    const { navigation } = this.props

    return (
      <TouchableHighlight key={deck.title} onPress={() => navigation.navigate('Details', {title: deck.title, qtd: deck.questions.length})}>
        <View style={styles.deckWrapper}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.description}>{deck.questions.length} card(s)</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const allDecks = Object.values(this.state.allDecks)
    
    return (
      <View style={styles.deckWrapper}>
        { allDecks.map(this.deckRender) }
      </View>
    )
  }
}

export default Deck