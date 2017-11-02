import { combineReducers } from 'redux'

import { RECEIVE_POST, RECEIVE_CATEGORY } from '../actions'

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

export default combineReducers({
  posts,
  categories
})