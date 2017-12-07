import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Deck from './deck'
import NewDeck from './newDeck'
import CardCreate from './cardCreate'

const InnerNavigation = StackNavigator({
  newDeck: {
    screen: NewDeck
  },
  cardCreate: {
    screen: CardCreate
  }
}) 

const MainNavigation = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Decks'
    },
  },
  NavDeck: {
    screen: InnerNavigation,
    navigationOptions: {
      title: 'New Deck'
    }
  }},{
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 18,
      },
    },
  }
)

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