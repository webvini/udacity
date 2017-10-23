import { ADD_POST } from '../actions'

const initialInfo = 'BACON'

export const post = (state = initialInfo, action) => {

  const { post } = action

  switch (action.type) {
    case ADD_POST:
      return state
    default:
      return state
  }
}

export default post