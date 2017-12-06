import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import NewDeck from './newDeck'
import CardCreate from './cardCreate'

const InnerNavigation = StackNavigator({
  newDeck: {
    screen: NewDeck
  }
}) 

class NavDeck extends Component {
  render() {
    return (
      <View>
        <InnerNavigation />
      </View>
    )
  }
}

export default NavDeck