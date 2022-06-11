import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thunder</title>
      </Head>
      <main className={styles.main}></main>
    </div>
  );
}
