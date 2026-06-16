import styles from './Insights.module.css'

const insights = [
  {
    tag: 'Market Outlook — MarketWatch',
    title: "Stocks Still Mostly Supported by Big Tech's Fundamentals",
    body: "LACM's Hal Reynolds highlights the role Big Tech continues to play in supporting the US stock market, noting how new developments in AI are shaping both risks and opportunities for investors.",
    href: '#',
  },
  {
    tag: 'Market Analysis — The Telegraph',
    title: "When Fried Chicken Becomes Part of the AI Boom, It's Time to Worry",
    body: "The Shiller P/E ratio has reached levels last seen before the dot-com crash. Hal Reynolds argues today's market is fundamentally stronger, driven by companies with robust earnings growth and durable cash flows.",
    href: '#',
  },
]

export default function Insights() {
  return (
    <section id="insights" className={styles.section}>
      <span className={styles.eyebrow}>Latest Insights</span>
      <h2 className={styles.headline}>
        Knowledge <em>Delivered.</em><br />Clarity Provided.
      </h2>
      <div className={styles.grid}>
        {insights.map((item, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.tag}>{item.tag}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
            <a href={item.href} className={styles.link}>Read Article</a>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <a href="#" className={styles.footerLink}>All Insights →</a>
      </div>
    </section>
  )
}
