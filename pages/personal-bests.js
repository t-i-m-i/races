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
                            <td><strong className="inverted">5:11</strong></td>
                            <td>Iron Dragon 2019</td>
                        </tr>
                        
                        <tr>
                            <td><strong>Sprint Triathlon</strong></td>
                            <td>swim</td>
                            <td>2:27</td>
                            <td>Radłów 2021</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>bike</td>
                            <td>31.00</td>
                            <td>Radłów 2021</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>run</td>
                            <td>5:16</td>
                            <td>Frydman 2021</td>
                        </tr>

                        <tr>
                            <td><strong>1/4 IM</strong></td>
                            <td>swim</td>
                            <td><strong className="inverted">2:25</strong></td>
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
                            <td>2:30</td>
                            <td>Kędzierzyn-Koźle 2019</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>bike</td>
                            <td><strong className="inverted">31.6</strong></td>
                            <td>Głogów Małopolski 2022</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>run</td>
                            <td>5:12</td>
                            <td>Pszczyna i Osiek 2022</td>
                        </tr>

                        <tr>
                            <td><strong>Run</strong></td>
                            <td>3k</td>
                            <td>(brak)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>5k</td>
                            <td><strong className="inverted">4:40</strong></td>
                            <td>Leśnicka Piątka 2018</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>10k</td>
                            <td>4:55</td>
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
