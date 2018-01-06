import React, { Component } from 'react'
import { View, Text, TouchableHighlight, AsyncStorage } from 'react-native'

import { styles } from './styles'
import { toDeckDetails } from '../../navigation'

class Deck extends Component {

  state = {
    allDecks: []
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    console.log(this.props)
  }

  componentDidMount() {
    this.getAllDecks()
    console.log('bacon')
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
      <TouchableHighlight key={deck.title} onPress={() => navigation.navigate('Details', {title: deck.title, questions: deck.questions})}>
        <View style={styles.deckWrapper}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.description}>{deck.questions.length} card(s)</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const allDecks = Object.values(this.state.allDecks)
    console.log(allDecks)
    return (
      <View style={styles.deckWrapper}>
        {allDecks.length < 1 &&
          <Text>You have no deck :(</Text>
        }

        { allDecks.map(this.deckRender) }
      </View>
    )
  }
}

export default Deck