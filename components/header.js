import styles from './header.module.scss'

export default function Header() {
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
					because you can't start a journey unless you know where are you going&rdquo; <br />
					<small>Glen Mills</small>
				</p>
				<ul className={styles.header__list}>
					<li>Status:</li>
					<li>Triathlon: ,</li>
					<li>Duathlon: ,</li>
					<li>Bike: ,</li>
					<li>Swim: ,</li>
					<li>Marathon+: ,</li>
					<li>Marathon-: ,</li>
					<li>Total: </li>
				</ul>
			</div>
		</div>
	</div>
    </header>
  )
}
