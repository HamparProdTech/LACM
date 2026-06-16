import styles from './Mission.module.css'

export default function Mission() {
  return (
    <section id="approach" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <span className={styles.eyebrow}>Our Mission</span>
          <h2 className={styles.headline}>
            Achieving Client Success Through <em>Research</em> and Technology.
          </h2>
          <p className={styles.body}>
            LACM challenges the conventional wisdom that market environments dictate manager success. The Firm recognizes that investor preferences shift and change as market cycles evolve, and that long-term factor behavior does not guarantee future outperformance.
          </p>
          <a href="#" className={styles.link}>More About LACM →</a>
        </div>
        <div className={styles.panel}>
          <span className={styles.tag}>Investor Preference Theory®</span>
          <h3 className={styles.panelHeadline}>The DNA of our investment process.</h3>
          <p className={styles.panelBody}>
            LACM employs a dynamic, forward-looking, and adaptive approach centered around Investor Preference Theory®, implemented via its proprietary Dynamic Alpha Stock Selection Model®.
          </p>
          <div className={styles.divider} />
          <p className={styles.panelBody}>
            This innovative concept guides the research team in its search for alpha — avoiding historical biases in favor of capturing the views of today's equity investors.
          </p>
        </div>
      </div>
    </section>
  )
}
