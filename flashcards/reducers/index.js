import { AsyncStorage } from 'react-native'
import { ADD_DECKS, RECEIVE_DECKS } from '../actions'

const initState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

const decks = (state = initState, action) => {
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