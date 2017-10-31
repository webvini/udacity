import { combineReducers } from 'redux'

import { RECEIVE_POST } from '../actions'

const initialInfo = 'BACON'

function posts(state = {}, action) {

  switch (action.type) {
    case RECEIVE_POST:
      return {
        ...state,
        allPosts: action.posts
      }
    default:
      return { ...state }
  }
}

export default combineReducers({
  posts
})