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
    const result = await getRepositories({ keyword: 'TypeScript' })
    setRepositories(result)
  }

  const addToast = useCallback(() => {
    const mockToast = {
      mode: 'error',
      message: new Date().getSeconds(),
    }
    toastRef.current.addMessage(mockToast)
  }, [])

  useEffect(() => {
    fetchRepositories()
    // addToast()
  }, [addToast])

  return (
    <>
      <Head></Head>
      <Container>
        <Search />
        <button onClick={addToast}>click</button>
        <Repositories />
        <ToastPortal ref={toastRef} autoClose />
      </Container>
    </>
  )
}
