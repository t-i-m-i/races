import styles from './race-item.module.scss'

export default function RaceItem({ race }) {

  const percentage = () => {
    const score = race.place / race.participants * 100
    return score.toFixed()
  }

  return (
    <>
      <tr className={styles[race.info]}>
        <td>{race.date}</td>
        <td>
          {race.name}
          {race.info && <br />}
          <small className={styles['race-info']}>{race.info}</small>
        </td>
        <td>
          {race.distance} {race.distance && 'km'}
          {race.denivelation && (
            <small className={styles.info}>+{race.denivelation} m</small>
          )}
        </td>
        <td>
          {race.time}
          <small className={styles.info}>
            {race.avg} {race.flag}
          </small>
        </td>
        <td>
          {race.place}
          {race.participants && <span>/{race.participants}</span>}
          {race.place && <small className={styles.info}>{percentage()}%</small>}
        </td>
      </tr>
    </>
  )
}
