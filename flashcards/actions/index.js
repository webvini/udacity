import { AsyncStorage } from 'react-native'

export const ADD_DECKS = 'ADD_DECKS'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const addDeck = (deck) => {
  return dispatch => {
    AsyncStorage.setItem(ADD_DECKS).then(deck => dispatch({ type: ADD_DECKS, deck }))
  }
}

export const fetchDecks = () => {
  return dispatch => {
    console.log(AsyncStorage.getItem(RECEIVE_DECKS).then(decks => dispatch({ type: RECEIVE_DECKS, decks })))
  }
}