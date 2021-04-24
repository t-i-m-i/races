import { getSeasonsPaths, getSeasons, getRaces } from '../lib/races'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/layout'
import RaceItem from '../components/race-item'

export default function Races({ racesData, seasons }) {
  const router = useRouter()
  const { season } = router.query

  return (
    <Layout seasons={seasons} activeSeason={season}>
      <Head>
        <title>Races season {season}</title>
      </Head>
      {/* todo: make component */}
      <div className="g--table-container">
        <table className="table">
          <thead>
            <tr className="table__subheading">
              <td>Date</td>
              <td>Name</td>
              <td>Distance</td>
              <td>Time (Pace)</td>
              <td>Place/Participants</td>
            </tr>
          </thead>
          <tbody>
            {racesData.map((race, idx) => (
              <RaceItem key={idx} race={race} />
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getSeasonsPaths()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const racesData = await getRaces(params.season)
  const seasons = await getSeasons()
  return {
    props: {
      racesData,
      seasons
    },
    revalidate: 60,
  }
}
