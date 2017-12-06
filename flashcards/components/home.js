import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'

import Deck from './deck'
import NavDeck from './navDeck'

const MainNavigation = TabNavigator({
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Decks'
    }
  },
  NavDeck: {
    screen: NavDeck,
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