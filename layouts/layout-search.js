import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,400italic,900&amp;subset=latin,latin-ext"
          rel="stylesheet"
        ></link>
      </Head>
      <main>{children}</main>
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
