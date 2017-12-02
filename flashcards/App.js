import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Deck from './components/deck'
import CardView from './components/cardView'

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

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigation />
      </View>
    );
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

export default App