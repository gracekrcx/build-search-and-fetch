import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import debounce from 'lodash/debounce'
import { SearchWrapper, Input } from './styled'
import { useStore } from '../../context/store'
// import useCountRenders from '../../hooks/useCountRenders'
import { useRouter } from 'next/router'
// import searchIcon from '../../cache/images/searchIcon.jpeg'
import searchIcon from '../../images/encoding/searchIcon'

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
      // shallow 代表:
      // Update the path of the current page 『without』 rerunning 重跑
      // getStaticProps, getServerSideProps or getInitialProps. Defaults to false

      // console.log(
      //   `App is changing to ${url} ${
      //     shallow ? 'with' : 'without'
      //   } shallow routing`
      // )

      const searchKeyword = url.replace('/?q=', '').trim()
      if (shallow) {
        setKeyword(searchKeyword)
      }
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
      fetchRepositories(searchKeyword, 0)
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
      {/* <Image src={searchIcon} alt="icon" width={320} height={200} /> */}

      <img src={searchIcon} alt="icon" style={{ width: '80%' }} />

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
