import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import debounce from 'lodash/debounce'
import { SearchWrapper, Input, Button } from './styled'
import { useStore } from '../../context/store'
import getRepositories from '../../clientFetch/getRepositories'
import ToastPortal from '../../components/ToastPortal'
import useCountRenders from '../../hooks/useCountRenders'

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const { setRepositories, setLoading } = useStore()
  const toastRef = useRef()
  const debounceTime = 800

  // useCountRenders()

  // (1) input change
  const handleChange = (e) => {
    const value = e.target.value.trim()
    setKeyword(value)
  }

  // (3) debouncedSearch
  const debouncedSearch = useCallback(
    debounce((searchKeyword) => {
      fetchRepositories(searchKeyword)
    }, debounceTime),
    []
  )

  // (2) keyword change
  useEffect(() => {
    if (keyword) {
      debouncedSearch(keyword)
    }
  }, [keyword, debouncedSearch])

  // (4) call github api
  const fetchRepositories = async (keyword) => {
    setLoading(true)
    const result = await getRepositories({ keyword })
    if (Array.isArray(result)) {
      setRepositories(result)
    } else {
      addToast()
      setRepositories([])
    }
    setLoading(false)
  }

  // (error handler)
  const addToast = useCallback(() => {
    const mockToast = {
      mode: 'error',
      message: '查詢功能出現問題，請稍候再試～',
    }
    toastRef.current.addMessage(mockToast)
  }, [])

  // const handleSearch = () => {
  //   console.log('----- button')
  // }

  return (
    <SearchWrapper>
      <Input
        type="text"
        placeholder="Find a repository…"
        value={keyword}
        onChange={handleChange}
      />
      {/* <Button onClick={handleSearch} disabled={loading}>
        Search
      </Button> */}
      {/* <button onClick={addToast}>click</button> */}
      <ToastPortal ref={toastRef} autoClose />
    </SearchWrapper>
  )
}
