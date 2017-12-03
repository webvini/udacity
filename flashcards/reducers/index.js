import { AsyncStorage } from 'react-native'
import { RECEIVE_DECKS } from '../actions'

const decks = (state = {}, action) => {

  switch(action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        action: action.decks
      }
    default:
      return { ...state }
  }

}

export default decks