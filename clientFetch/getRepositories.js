import { SET_REPOSITORIES } from '../actions'

export default function getRepositories({ keyword = '', page = 1 }) {
  return fetch(`api/search/repositories?keyword=${keyword}&page=${page}`)
    .then((res) => {
      if (!res.ok) {
        throw res
      }
      // console.log('response',res)
      return res.json()
    })
    .then((myJson) => {
      // console.log(myJson)
      // dispatch({ type: SET_REPOSITORIES, payload: { list: myJson } })
      return myJson
    })
    .catch((e) => {
      console.error(' error:', e)
      return []
    })
}
