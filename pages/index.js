import Head from 'next/head'
import Container from '../components/Container'
import Search from '../components/Search'
import Repositories from '../components/Repositories'

export default function Home() {
  return (
    <>
      <Head>
        <title>build search and fetch</title>
        <meta property="og:title" content="build search and fetch" />
        <meta property="og:image" content="https://reactjs.org/logo-og.png" />
        <meta property="og:description" content="build search and fetch" />
      </Head>
      <Container>
        <Search />
        <Repositories />
      </Container>
    </>
  )
}
