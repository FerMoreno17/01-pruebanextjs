import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About - nextjs</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>--- ABOUT PAGE ----</h1>
        <h1 className={styles.title}>
          {/* IR A <a href="/">Home!</a> */}
          IR A <Link href={"/"}>HOME!</Link>
        </h1>

        <p className={styles.description}>
          Pagina Nº2
          <code className={styles.code}>pages/about.js</code>
        </p>
      </main>
    </div>
  );
}
