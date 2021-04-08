import Head from 'next/head'
import Layout from '../components/layout'
import { getSeasons } from '../lib/races'

export default function IndexPage({ seasons }) {
  return (
    <Layout seasons={seasons}>
      <Head>
        <title>Races</title>
      </Head>
    </Layout>
  )
}

export async function getStaticProps() {
  const seasons = await getSeasons()
  return {
    props: {
      seasons
    }
  }
}
