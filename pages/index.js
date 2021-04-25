import Head from 'next/head'
import Layout from '../layouts/layout'
import { getSeasons, getRaces } from '../lib/races'
import RaceItem from '../components/race-item'

const currentYear = new Date().getFullYear().toString()

export default function IndexPage({ racesData, seasons }) {
  return (
    <Layout seasons={seasons} activeSeason={currentYear}>
      <Head>
        <title>Races</title>
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

export async function getStaticProps() {
  const racesData = await getRaces(currentYear)
  const seasons = await getSeasons()
  return {
    props: {
      racesData,
      seasons
    },
    revalidate: 60,
  }
}
