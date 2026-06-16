import styles from './CTABand.module.css'

export default function CTABand() {
  return (
    <div id="contact" className={styles.band}>
      <div>
        <h2 className={styles.headline}>
          Let's Begin<br /><em>the Conversation.</em>
        </h2>
        <p className={styles.sub}>
          To explore how LACM can help you achieve your investment objectives, contact our team for a confidential discussion.
        </p>
      </div>
      <div className={styles.actions}>
        <a href="#" className={styles.btnPrimary}>Get in Touch</a>
        <a href="#" className={styles.btnGhost}>Subscribe to Insights →</a>
      </div>
    </div>
  )
}
