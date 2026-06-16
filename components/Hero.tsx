import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgText}>LACM</div>
      <div className={styles.eyebrow}>Global Quantitative Equity Management</div>
      <h1 className={styles.headline}>
        A Different<br />
        Kind of <em>Alpha.</em>
      </h1>
      <p className={styles.sub}>
        Los Angeles Capital challenges the conventional wisdom that market environments dictate manager success. We employ a dynamic, forward-looking approach — adapting to the preferences of today's equity investors.
      </p>
      <div className={styles.actions}>
        <a href="#approach" className={styles.btnPrimary}>Our Approach</a>
        <a href="#strategies" className={styles.btnGhost}>View Strategies</a>
      </div>
    </section>
  )
}
