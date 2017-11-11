const api = 'http://localhost:3001'

const headers = {
  "Accept": "application/json",
  "Authorization": "free",
  "Content-Type": "application/json"
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

export const getAllComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { method: 'GET', headers })
    .then(res => res.json())

export const setComment = (comment) =>
  fetch(`${api}/comments/`, { method: 'POST', headers, body: JSON.stringify(comment) })
    .then(res => res.json())
    .catch(error => error)

export const deleteComment = (comment) =>
  fetch(`${api}/comments/${comment}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .catch(error => error)

export const editComment = (comment) =>
  fetch(`${api}/comments/${comment}`, { method: 'PUT', headers, body: JSON.stringify(comment) })
    .then(res => res.json())
    .catch(error => error)