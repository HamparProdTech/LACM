import styles from './Stats.module.css'

const stats = [
  { num: '$31.5', unit: 'B', label: 'Firmwide AUM — As of March 31, 2026' },
  { num: '24', unit: 'yrs', label: 'Innovation in quantitative investment management' },
  { num: '100', unit: '%', label: 'Employee owned through parent entities' },
]

export default function Stats() {
  return (
    <div className={styles.strip}>
      {stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.num}>{s.num}<span>{s.unit}</span></div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
