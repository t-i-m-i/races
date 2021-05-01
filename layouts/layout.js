import Head from 'next/head'
import Header from '../components/header'
import Nav from '../components/nav'

export default function Layout({ children, seasons, activeSeason, stats }) {
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
      <Header stats={stats} />
      <Nav seasons={seasons} activeSeason={activeSeason} />
      <main className="main">{children}</main>
      <footer></footer>
      <style jsx>{`
        main {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1em 1em;
        }
      `}</style>
    </>
  )
}
