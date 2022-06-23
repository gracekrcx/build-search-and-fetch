import { SET_REPOSITORIES } from '../actions'

export default function getRepositories({ keyword = '', page = 1 }) {
  return fetch(`api/search/repositories?keyword=${keyword}&page=${page}`)
    .then((res) => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then((resJson) => {
      console.log(resJson)
      // dispatch({ type: SET_REPOSITORIES, payload: { list: resJson } })
      return resJson
    })
    .catch((e) => {
      console.error('client error:', e.status)
      console.error('client error:', e.statusText)
      // call error toast notification
      return null
    })
}
