import { AsyncStorage } from 'react-native'
import { ADD_DECKS, RECEIVE_DECKS } from '../actions'

const decks = (state = {}, action) => {
  const { deck } = action

  switch(action.type) {
    case ADD_DECKS:
      return {
        ...state,
        allDecks: state.allDecks.concat([deck])
      }
    case RECEIVE_DECKS:
      return {
        ...state,
        allDecks: action.decks
      }
    default:
      return { ...state }
  }

}

export default decks