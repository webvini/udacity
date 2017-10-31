import * as API from '../util/api'

// API.getAllPosts().then(post => {
//   console.log(post)
// })

export const RECEIVE_POST = 'RECEIVE_POST'
export const REMOVE_POST = 'REMOVE_POST'

// export const receivePosts = posts => ({
//   type: RECEIVE_POST,
//   posts
// });

export const removePost = (post) => ({
  type: REMOVE_POST,
  post
})

export function fetchPosts() {
  return dispatch => {
    API.getAllPosts().then(posts => dispatch({ type: RECEIVE_POST, posts }))
  }
}













// export const fetchPosts = () => async dispatch => {
//   const posts = await API.getAllPosts();
//   return dispatch(receivePosts(posts));
// };

// export function fetchPosts() {
//   return dispatch => {
//     API.getAllPosts().then(allPosts => {
//       dispatch({
//         type: RECEIVE_POST,
//         posts: allPosts
//       })
//     })
//   }
// }

// export const fetchPosts = () => dispatch =>
//   API.getAllPosts().then(datas => {
//     receivePost(datas)
//   })