import * as API from '../util/api'

// API.getAllPosts().then(post => {
//   console.log(post)
// })

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_POST = 'REMOVE_POST'
export const SELECT ='SELECT'

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
})

export function fetchPosts() {
  return dispatch => {
    API.getAllPosts().then(posts => dispatch({ type: RECEIVE_POSTS, posts }))
  }
}

export function fetchCategories() {
  return dispatch => {
    API.getAllCategories().then(categories => dispatch({ type: RECEIVE_CATEGORY, categories }))
  }
}

export function fetchComments(id) {
  return dispatch => {
    API.getAllComments(id).then(comments => dispatch({ type: RECEIVE_COMMENT, comments }))
  }
}

export function setSelected(target, object) {
  return dispatch => {
    dispatch({ type: SELECT, target, object })
  }
}

export function addComment(comment) {
  return dispatch => {
    API.setComment(comment).then(comment => dispatch({ type: ADD_COMMENT, comment }))
  }
}