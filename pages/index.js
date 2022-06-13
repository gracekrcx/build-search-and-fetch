import Head from 'next/head'
import Image from 'next/image'
import People from '../components/People'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head></Head>
      <main className={styles.main}>
        <People name="Sally" age={23} />
      </main>
    </div>
  )
}
