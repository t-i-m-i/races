import Head from 'next/head'
import Layout from '../layouts/layout-search'
import { getRaces } from '../lib/races'
import RaceItem from '../components/race-item'
import { useState } from 'react'

export default function SearchPage({ racesData }) {
  const [searchResults, setResults] = useState([])
  const search = e => {
    const phrase = e.target.value
    let filteredData = phrase.length
      ? racesData.filter(item => item.name.toLowerCase().includes(phrase))
      : []
    setResults(filteredData)
  }

  return (
    <Layout>
      <Head>
        <title>Search results</title>
      </Head>
      <div className="search">
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          onInput={search}
        />
      </div>

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
            {searchResults.map((race, idx) => (
              <RaceItem key={idx} race={race} />
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .search {
          display: flex;
          justify-content: center;
          margin: 1em;
        }
        label {
          color: rgba(255, 255, 255, 0.5);
          padding: 0.75em;
        }
        input {
          font-size: inherit;
          padding: 0.75em;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: transparent;
          color: #fff;
          transition: border-color 200ms;
        }
        input:focus {
          border-color: rgba(255, 255, 255, 0.5);
          outline: none;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  const racesData = await getRaces()
  return {
    props: {
      racesData
    },
    revalidate: 60
  }
}
