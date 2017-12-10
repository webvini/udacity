import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import { styles } from './styles'
import { toDeckDetails } from '../../navigation'

class Deck extends Component {

  decks = () => {
    const { navigation } = this.props

    return (
      <TouchableHighlight onPress={() => navigation.navigate('Details')}>
        <View style={styles.deckWrapper}>
          <Text style={styles.title}>Javascript</Text>
          <Text style={styles.description}>10 card(s)</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View>
        { this.decks() }
      </View>
    )
  }
}

export default Deck