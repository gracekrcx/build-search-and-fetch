import { useContext, createContext, useState } from 'react'
import keywordReducer, { initialState } from '../reducers/repositoriesReducer'

// type 可以參考
// https://github.com/vercel/next.js/blob/6178e7cf6d8822f6f29014c5410c455ca7bafbc2/packages/next/shared/lib/head-manager-context.ts
const StoreContext = createContext({})

// custom hook
export const useStore = () => {
  return useContext(StoreContext)
}

const StoreContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(keywordReducer, initialState)
  const [repositories, setRepositories] = useState([])
  return (
    <StoreContext.Provider value={{ repositories, setRepositories }}>
      {children}
    </StoreContext.Provider>
  )
}

export const StoreContextConsumer = StoreContext.Consumer
export default StoreContextProvider
