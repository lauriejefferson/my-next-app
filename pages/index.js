import Head from "next/head";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Veniam Lorem et aliquip labore id magna nisi aliqua ex exercitation
          magna consequat eiusmod. Commodo aliquip qui eu consequat ex consequat
          excepteur dolor ipsum laboris id duis reprehenderit. Aliqua esse
          tempor enim ut dolor labore. Enim incididunt qui proident enim
          cupidatat in magna adipisicing excepteur. Do eu exercitation pariatur
          dolore ad sunt do irure dolor dolore nisi duis. Exercitation nisi duis
          ex elit ex ea.
        </p>
        <p className={styles.text}>
          Eiusmod mollit ipsum occaecat esse consectetur eiusmod dolore
          reprehenderit mollit voluptate eiusmod excepteur ut. Qui pariatur duis
          amet excepteur irure enim culpa commodo aute exercitation cillum
          tempor proident ut. Consectetur officia occaecat laborum reprehenderit
          sint pariatur est.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
