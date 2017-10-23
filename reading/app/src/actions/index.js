export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'

// export const fetchData = () => url => (

// )

export const addPost = post => ({
  type: ADD_POST,
  post
})

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
})