import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import debounce from 'lodash/debounce'
import { SearchWrapper, Input, Button } from './styled'
import { useStore } from '../../context/store'
// import useCountRenders from '../../hooks/useCountRenders'

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const { fetchRepositories } = useStore()
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
      // (4) call github api
      fetchRepositories(searchKeyword, 0)
    }, debounceTime),
    []
  )

  // (2) keyword change
  useEffect(() => {
    if (keyword) {
      debouncedSearch(keyword)
    }
  }, [keyword, debouncedSearch])

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
    </SearchWrapper>
  )
}
