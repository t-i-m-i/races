import Link from 'next/link'
import styles from './nav.module.scss'
import { useState } from 'react'

export default function Nav({ seasons, activeSeason }) {
  const [activeTab, setActiveTab] = useState(activeSeason)

  const isActiveTab = season => {
    return activeTab.toString() === season ? 'active' : 'link'
  }

  return (
    <nav>
      <ul className={styles.tabs}>
        {seasons.map((season, idx) => (
          <li className={styles.tabs__item} key={`season-${idx}`}>
            <Link href={`/${season}`} scroll={false}>
              <a
                className={styles[isActiveTab(season)]}
                onClick={() => setActiveTab(season)}
              >
                {season}
              </a>
            </Link>
          </li>
        ))}
        <li className={styles.tabs__item}>
          <Link href="search">
            <a className={styles['link']}>Search</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
