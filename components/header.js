import styles from './header.module.scss'

export default function Header({ stats }) {

  // total is a computed property (vue :))
  const total = stats => {
    const sum = Object.values(stats).reduce((a, c) => a + c, 0)
    return sum
  }

  return (
    <header>
      <div className={styles.branding}>
        <div className={styles.branding__content}>
          <div className={styles.header}>
            <p className={styles.header__name}>Tymoteusz Bąk</p>
            <h1 className={styles.header__heading}>Triathlete</h1>
            <p className={styles.header__quote}>
              &ldquo;before you start you have to have some concept, <br />
              some dream of what you want to achieve, <br />
              because you can't start a journey unless you know where are you
              going&rdquo; <br />
              <small>Glen Mills</small>
            </p>
            <ul className={styles.header__list}>
              <li>Status:</li>
              <li>Triathlon: {stats.triathlon}</li>
              <li>Duathlon: {stats.duathlon}</li>
              <li>Marathon+: {stats.marathonPlus}</li>
              <li>Marathon-: {stats.marathonMinus}</li>
              <li>Run: {stats.run}</li>
              <li>Bike: {stats.bike}</li>
              <li>Total: {total(stats)}</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}
