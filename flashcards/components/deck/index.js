import React, { Component } from 'react'
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native'

import { styles } from './styles'
import { toDeckDetails } from '../../navigation'

class Deck extends Component {

  state = {
    allDecks: {}
  }

  componentDidMount() {
    //AsyncStorage.clear()
    this.getAllDecks()
  }

  getAllDecks = () => {
    AsyncStorage.getItem('decks').then((decks) => {
      if(decks) {
        console.log('inicio', Object.values(JSON.parse(decks)))
        this.setState({
          allDecks: Object.values(JSON.parse(decks))
        })
      }
    })
  }

  deckRender = deck => {
    const { navigation } = this.props

    return (
      <TouchableHighlight key={deck.title} onPress={() => navigation.navigate('Details', {title: deck.title, questions: deck.questions})}>
        <View style={styles.deckWrapper}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.description}>{deck.questions.length} card(s)</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const allDecks = this.state.allDecks
    
    return (
      <View style={styles.deckWrapper}>
        {Object.keys(allDecks).length < 1 &&
          <Text>You have no deck :(</Text>
        }

        {Object.keys(allDecks).length > 0 &&
          allDecks.map(this.deckRender)
        }
      </View>
    )
  }
}

export default Deck