import Head from 'next/head'
import Layout from '../layouts/layout'
import { getSeasons, getStats } from '../lib/races'

export default function PersonalBestsPage({ seasons, stats }) {
    return (
        <Layout seasons={seasons} activeSeason='personal-bests' stats={stats}>
            <Head>
                <title>Personal bests</title>
            </Head>
            
            <h2>Personal bests</h2>
            <div className="g--table-container">
                <table className="table">
                    <thead>
                        <tr className="table__subheading">
                            <td>Discipline</td>
                            <td>Leg</td>
                            <td>Tempo</td>
                            <td>Event</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Olympic Triathlon</strong></td>
                            <td>swim (australian exit)</td>
                            <td>2:10</td>
                            <td>Iron Dragon 2019</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>swim</td>
                            <td>2:28</td>
                            <td>Wtórpol 2019</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>bike</td>
                            <td>30.42</td>
                            <td>KnappenMan 2018</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>run</td>
                            <td>5:11</td>
                            <td>Iron Dragon 2019</td>
                        </tr>
                        
                        <tr>
                            <td><strong>Sprint Triathlon</strong></td>
                            <td>swim</td>
                            <td>2:18</td>
                            <td>Triathlon Sokoła 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>bike</td>
                            <td>31.20</td>
                            <td>MP AG Rzeszów 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>run</td>
                            <td><strong className="inverted">5:00</strong></td>
                            <td>Frydman 2023</td>
                        </tr>

                        <tr>
                            <td><strong>1/4 IM</strong></td>
                            <td>swim</td>
                            <td>2:25</td>
                            <td>Stryków 2018</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>bike</td>
                            <td>30.43</td>
                            <td>Stryków 2018</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>run</td>
                            <td>5:16</td>
                            <td>Stryków 2019</td>
                        </tr>
                        
                        <tr>
                            <td><strong>1/8 IM</strong></td>
                            <td>swim</td>
                            <td><strong className="inverted">~2:05</strong></td>
                            <td>Triathlon Głogowski 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>bike</td>
                            <td><strong className="inverted">31.7</strong></td>
                            <td>Uniejów 2022</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>run</td>
                            <td>5:01</td>
                            <td>Syców 2023</td>
                        </tr>

                        <tr>
                            <td><strong>Run</strong></td>
                            <td>3000m</td>
                            <td><strong className="inverted">4:39</strong> (time: 13:58)</td>
                            <td>Pogoń Ruda Śląska 2023</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>5k</td>
                            <td><strong className="inverted">4:40</strong> (time: 23:20)</td>
                            <td>Leśnicka Piątka 2018</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10k</td>
                            <td>4:55 (time: 49:20)</td>
                            <td>Gliwicka Parkowa Prowokacja Biegowa 2015</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const seasons = await getSeasons()
    const stats = await getStats()
    return {
        props: {
            seasons,
            stats,
        },
        revalidate: 60,
    }
}
