import styles from './History.module.css'

const milestones = [
  { year: '2024', event: 'Launched two CITs with US Large Cap and World ex-US focus. Added Good Governance component to the ESG Model.' },
  { year: '2023', event: 'Launched first sub-advised ETF solution for ACWI ex-US. Expanded SFDR Article 8 sustainability strategies.' },
  { year: '2022', event: 'LACM celebrates its 20-year anniversary. Enhanced Climate Opportunities factor and expanded Dynamic Alpha Model framework.' },
  { year: '2016', event: 'Established LACM Global, Ltd. in the UK. Passed $20 billion in assets under management.' },
  { year: '2012', event: 'Launched first EAFE portfolios. Firm passed $10 billion in assets under management.' },
  { year: '2002', event: 'Founding principals build an independent, client-centric firm focused on quantitative active equity management.' },
]

export default function History() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>Our History</span>
          <h2 className={styles.headline}>
            A Two Decade <em>Journey.</em>
          </h2>
          <p className={styles.body}>
            Since 2002, LACM has grown from a research-driven startup to one of the world's leading quantitative equity managers — building and refining our Dynamic Alpha Stock Selection Model® every step of the way.
          </p>
          <a href="#" className={styles.link}>Our Full Story →</a>
        </div>
        <div className={styles.timeline}>
          {milestones.map((m, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.year}>{m.year}</div>
              <div className={styles.event}>{m.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
