import {
  useContext,
  createContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import keywordReducer, { initialState } from '../reducers/repositoriesReducer'
import ToastPortal from '../components/ToastPortal'
import getRepositories from '../clientFetch/getRepositories'
import delay from '../utils/delay'

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
  const [loading, setLoading] = useState(false)
  const [searchData, setSearchData] = useState({ keyword: '', page: 0 })
  const toastRef = useRef()

  // (error handler)
  const addToast = useCallback(() => {
    const mockToast = {
      mode: 'error',
      message: '查詢功能出現問題，請稍候再試～',
    }
    toastRef.current.addMessage(mockToast)
  }, [])

  // (1) update searchData
  // 因為 search 會用到，scroll auto 也會用到，所以搬到這隻檔案
  // Parameter 帶來 使用者 給的資訊的，function 如果 re-reder 會造成 RepoItem.js re-reder
  const fetchRepositories = useCallback((text, num) => {
    if (num === 0) {
      setRepositories([])
    }
    setSearchData((r) => {
      return { keyword: text || r.keyword, page: num === 0 ? 1 : r.page + 1 }
    })
  }, [])

  // (2) 只有在 searchData 被 update 執行 fetch
  // update 和 fetch 分開
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      // await delay(5000)
      const result = await getRepositories(searchData)
      if (Array.isArray(result)) {
        setRepositories((r) => [...r, ...result])
      } else {
        addToast()
        setRepositories([])
      }
      setLoading(false)
    }
    if (searchData.keyword) {
      fetchData()
    }
  }, [addToast, searchData])

  return (
    <StoreContext.Provider
      value={{
        repositories,
        setRepositories,
        loading,
        setLoading,
        fetchRepositories,
        searchData,
      }}
    >
      {children}
      <ToastPortal ref={toastRef} autoClose />
    </StoreContext.Provider>
  )
}

export const StoreContextConsumer = StoreContext.Consumer
export default StoreContextProvider
