import { TabNavigator, StackNavigator } from 'react-navigation'

import Deck from './components/deck/index'
import Details from './components/deck/details'
import NewDeck from './components/newDeck/index'
import Card from './components/card/index'

export const stackDeck = StackNavigator({
  List: {
    screen: Deck
  },
  Details: {
    screen: Details
  }
})

export const stackNewDeck = StackNavigator({
  newDeck: {
    screen: NewDeck
  },
  card: {
    screen: Card,
    navigationOptions: {
      title: 'Add Card'
    }
  }
})

export const MainNavigation = TabNavigator({
  Deck: {
    screen: stackDeck,
    navigationOptions: {
      title: 'Decks'
    },
  }
  ,
  NavDeck: {
    screen: stackNewDeck,
    navigationOptions: {
      title: 'New Deck'
    }
  }},{
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 18,
      },
    },
  }
)