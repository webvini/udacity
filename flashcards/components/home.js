import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Deck from './deck'
import NewDeck from './newDeck'

const MainNavigation = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Decks'
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      title: 'New Deck'
    }
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