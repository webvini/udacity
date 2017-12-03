import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Deck from './deck'
import CardView from './cardView'

const MainNavigation = StackNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Decks'
    }

  },
  CardView: {
    screen: CardView
  }
})

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
})

export default Home