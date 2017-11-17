import { combineReducers } from 'redux'

import {
  RECEIVE_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  RECEIVE_CATEGORY,
  SELECT,
  RECEIVE_COMMENT,
  ADD_COMMENT,
  DOWN_VOTE_POST,
  UP_VOTE_POST,
  DELETE_COMMENT,
  EDIT_COMMENT,
  COMMENT_SELECTED,
  DOWN_VOTE_COMMENT,
  UP_VOTE_COMMENT } from '../actions'

const posts = (state = {}, action) => {
  const { post } = action

  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        allPosts: action.posts
      }
    case ADD_POST:
      return {
        ...state,
        allPosts: state.allPosts.concat([post])
      }
    case EDIT_POST:
      return {
        ...state,
        allPosts: state.allPosts
          .filter(p => p.id !== post.id)
          .concat([post])
      }
    case DELETE_POST:
      return {
        ...state,
        allPosts: state.allPosts.filter(p => p.id !== post.id)
      }
    case DOWN_VOTE_POST:
      return {
        ...state,
        allPosts: state.allPosts.map(p => {
          if( p.id === post.id ) {
            p.voteScore = post.voteScore
          }
          return p
        })
      }
    case UP_VOTE_POST:
      return {
        ...state,
        allPosts: state.allPosts.map(p => {
          if( p.id === post.id ) {
            p.voteScore = post.voteScore
          }
          return p
        })
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
        allComments: state.allComments
          .filter(c => c.id !== comment.id)
          .concat([comment])
      }
    case COMMENT_SELECTED:
      return {
        ...state,
        selected: action.object
      }
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        allComments: state.allComments.map(c => {
          if( c.id === comment.id ) {
            c.voteScore = comment.voteScore
          }
          return c
        })
      }
    case UP_VOTE_COMMENT:
      return {
        ...state,
        allComments: state.allComments.map(c => {
          if( c.id === comment.id ) {
            c.voteScore = comment.voteScore
          }
          return c
        })
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