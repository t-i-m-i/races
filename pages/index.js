import Head from 'next/head'
import Layout from '../layouts/layout'
import { getSeasons, getRaces, getStats } from '../lib/races'
import RaceItem from '../components/race-item'

const currentYear = new Date().getFullYear().toString()

export default function IndexPage({ racesData, seasons, stats }) {
  const total = Object.keys(racesData).length;
  return (
    <Layout seasons={seasons} activeSeason={currentYear} stats={stats}>
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
          <tfoot>
            <tr className="table__subheading">
              <td colspan="5">Total: {total}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const racesData = await getRaces(currentYear)
  const seasons = await getSeasons()
  const stats = await getStats()
  return {
    props: {
      racesData,
      seasons,
      stats,
    },
    revalidate: 60,
  }
}
