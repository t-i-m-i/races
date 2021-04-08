import Head from 'next/head'
import Header from './header'
import Nav from './nav'
import styles from './layout.module.scss'

export default function Layout({ children, seasons, activeSeason }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
        <link
          href="http://fonts.googleapis.com/css?family=Lato:400,400italic,900&amp;subset=latin,latin-ext"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Nav seasons={seasons} activeSeason={activeSeason} />
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </>
  )
}
