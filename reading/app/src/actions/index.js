import * as API from '../util/api'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const COMMENT_SELECTED = 'COMMENT_SELECTED'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
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

export const addPost = (post) => {
  return dispatch => {
    API.setPost(post).then(post => dispatch({ type: ADD_POST, post }))
  }
}

export const editPost = (post) => {
  return dispatch => {
    API.editPost(post).then(post => dispatch({ type: EDIT_POST, post }))
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

export function downVotePost(postID) {
  return dispatch => {
    API.downVotePost(postID).then(post => dispatch({ type: DOWN_VOTE_POST, post }))
  }
}

export function upVotePost(postID) {
  return dispatch => {
    API.upVotePost(postID).then(post => dispatch({ type: UP_VOTE_POST, post }))
  }
}

export function deleteComment(comment) {
  return dispatch => {
    API.deleteComment(comment).then(comment => dispatch({ type: DELETE_COMMENT, comment }))
  }
}

export function editComment(comment) {
  return dispatch => {
    API.editComment(comment).then(comment => dispatch({ type: EDIT_COMMENT, comment }))
  }
}

export function commentSelected(object) {
  return dispatch => {
    dispatch({ type: COMMENT_SELECTED, object })
  }
}

export function downVoteComment(commentID) {
  return dispatch => {
    API.downVoteComment(commentID).then(comment => dispatch({ type: DOWN_VOTE_COMMENT, comment }))
  }
}

export function upVoteComment(commentID) {
  return dispatch => {
    API.upVoteComment(commentID).then(comment => dispatch({ type: UP_VOTE_COMMENT, comment }))
  }
}