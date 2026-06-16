import styles from './Strategies.module.css'

const strategies = [
  { num: '01', title: 'Global Equity', desc: 'Comprehensive exposure to developed and emerging market equities through our Dynamic Alpha framework.' },
  { num: '02', title: 'U.S. Equity', desc: 'Large cap, small cap, and microcap strategies built on two decades of domestic quantitative research.' },
  { num: '03', title: 'Non-U.S. Equity', desc: 'EAFE, World ex-US, and regional mandates for investors seeking international diversification.' },
  { num: '04', title: 'Emerging Markets', desc: 'Access to high-growth economies with robust risk management and local market expertise.' },
  { num: '05', title: 'Active Extension', desc: '130/30 portfolios designed to capture higher information ratios in large cap mandates.' },
  { num: '06', title: 'ESG & Responsible', desc: 'SFDR Article 8 solutions and sustainability-focused strategies integrating Good Governance factors.' },
]

export default function Strategies() {
  return (
    <section id="strategies" className={styles.section}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>Strategies</span>
        <h2 className={styles.headline}>
          Portfolios Tailored to <em>Your</em> Requirements.
        </h2>
        <p className={styles.body}>
          LACM forecasts returns and risks on equity securities globally, presently offering over 20 equity strategies across broad categories.
        </p>
      </div>
      <div className={styles.grid}>
        {strategies.map((s) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.num}>{s.num}</div>
            <div className={styles.title}>{s.title}</div>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <a href="#" className={styles.link}>All Strategies →</a>
      </div>
    </section>
  )
}
