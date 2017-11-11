import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  RECEIVE_CATEGORY,
  SELECT,
  RECEIVE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  COMMENT_SELECTED } from '../actions'

const posts = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        allPosts: action.posts
      }
    default:
      return { ...state }
  }
}

const comments = (state = {}, action) => {
  const { comment } = action

  switch (action.type) {
    case RECEIVE_COMMENT:
      return {
        ...state,
        allComments: action.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        allComments: state.allComments.concat([comment])
      }
    case DELETE_COMMENT:
      return {
        ...state,
        allComments: state.allComments.filter(c => c.id !== comment.id)
      }
    case EDIT_COMMENT:
      return {
        ...state,
        allComments: action.comments
      }
    case COMMENT_SELECTED:
      return {
        ...state,
        selected: action.object
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
    case SELECT:
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
  comments,
  categories,
  selected
})