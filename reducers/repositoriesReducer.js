// 先留著
import { SET_REPOSITORIES } from '../actions'

export const initialState = { list: [] }

function repositoriesReducer(state, { type, payload = {} }) {
  switch (type) {
    case SET_REPOSITORIES:
      return { ...state, list: payload.list }
    default:
      return state
  }
}

export default repositoriesReducer
