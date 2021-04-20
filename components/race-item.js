import styles from './race-item.module.scss'

export default function RaceItem({ race }) {

  const percentage = () => {
    const score = race.place / race.participants * 100
    return score.toFixed()
  }

  const editedInfo = () => {
    const info = race.info.replace('zapłacony', '').replace('anulowane', '');
    return info;
  }

  return (
    <>
      <tr>
        <td>{race.date}</td>
        <td>
          {race.name}
          {race.info && <br />}
          <small className={styles['race-info']}>
            {race.info.includes('zapłacony') && (
              <span className={`${styles['status']} ${styles['status--paid']}`}>
                zapłacony
              </span>
            )}
            {race.info.includes('anulowane') && (
              <span
                className={`${styles['status']} ${styles['status--cancelled']}`}
              >
                anulowane
              </span>
            )}
            {editedInfo()}
          </small>
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
