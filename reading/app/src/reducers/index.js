import { combineReducers } from 'redux'

import { RECEIVE_POST, RECEIVE_CATEGORY, SELECT_CATEGORY } from '../actions'

const posts = (state = {}, action) => {
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

const categories = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return {
        ...state,
        allCategories: action.categories
      }
    default:
      return { ...state }
  }
}

const selected = (state = {}, action) => {
  const { target, object } = action

  switch (action.type) {
    case SELECT_CATEGORY:
      return {
        ...state,
        [target]: object
      }
    default:
      return { ...state }
  }
}

export default combineReducers({
  posts,
  categories,
  selected
})