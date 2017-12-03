import { AsyncStorage } from 'react-native'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const receiveDecks = () => {
  return dispatch => {
    AsyncStorage.getItem(RECEIVE_DECKS).then(decks => dispatch({ type: RECEIVE_DECKS, decks }))
  }
}