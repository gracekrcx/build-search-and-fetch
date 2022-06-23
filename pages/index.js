import { useEffect, useRef, useCallback } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import getRepositories from '../clientFetch/getRepositories'
import { useStore } from '../context/store'
import Container from '../components/Container'
import Search from '../components/Search'
import Repositories from '../components/Repositories'
import ToastPortal from '../components/ToastPortal'

export default function Home() {
  const { setRepositories } = useStore()

  const toastRef = useRef()

  const fetchRepositories = async () => {
    const result = await getRepositories({ keyword: 'react' })
    if (Array.isArray(result)) {
      setRepositories(result)
    } else {
      addToast()
      setRepositories([])
    }
  }

  const addToast = useCallback(() => {
    const mockToast = {
      mode: 'error',
      message: '查詢功能出現問題，請稍候再試～',
    }
    toastRef.current.addMessage(mockToast)
  }, [])

  return (
    <>
      <Head></Head>
      <Container>
        <Search />
        {/* <button onClick={addToast}>click</button> */}
        <Repositories />
        <ToastPortal ref={toastRef} autoClose />
      </Container>
    </>
  )
}
