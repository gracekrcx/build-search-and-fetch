import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import Image from 'next/image'
import debounce from 'lodash/debounce'
import { SearchWrapper, Input, Button } from './styled'
import { useStore } from '../../context/store'
// import useCountRenders from '../../hooks/useCountRenders'
import { useRouter } from 'next/router'
import searchIcon from '../../cache/images/searchIcon.jpeg'

export default function Search() {
  const [keyword, setKeyword] = useState('')
  const { fetchRepositories } = useStore()
  const debounceTime = 1000
  const router = useRouter()

  useEffect(() => {
    const handleRouteChangeError = (err, url) => {
      if (err.cancelled) {
        console.log(`Route to ${url} was cancelled!`)
      }
    }

    const handleRouteChange = (url, { shallow }) => {
      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? 'with' : 'without'
      //   } shallow routing`
      // )

      const searchKeyword = url.replace('/?q=', '').trim()
      setKeyword(searchKeyword)
    }

    router.events.on('routeChangeError', handleRouteChangeError)
    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeError', handleRouteChangeError)
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router.events])

  // (1) input change
  const handleChange = (e) => {
    const value = e.target.value.trim()
    setKeyword(value)
  }

  // (3) debouncedSearch
  const debouncedSearch = useCallback(
    debounce((searchKeyword) => {
      // (4) call github api
      // fetchRepositories(searchKeyword, 0)
      router.push({
        query: { q: searchKeyword },
      })
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
      <Image src={searchIcon} alt="icon" width={320} height={200} />
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
