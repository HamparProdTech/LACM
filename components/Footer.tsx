import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>Los Angeles <span>Capital</span></div>
          <p className={styles.tagline}>
            A global quantitative equity manager committed to innovation, research, and client success since 2002.
          </p>
          <p className={styles.copy}>
            Los Angeles Capital Management LLC<br />© 2026. All rights reserved.
          </p>
        </div>
        <div>
          <div className={styles.heading}>Navigation</div>
          <ul className={styles.links}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Approach</a></li>
            <li><a href="#">Strategies</a></li>
            <li><a href="#">Insights</a></li>
            <li><a href="#">Responsible Investing</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div>
          <div className={styles.heading}>Legal</div>
          <ul className={styles.links}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">California Privacy Notice</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Corporate Documents</a></li>
            <li><a href="#">Japan Stewardship Code</a></li>
            <li><a href="#">Material Risks</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.legal}>
          Past performance is not a guarantee of future results. Investment process is subject to change. The information on this site does not constitute investment advice.
        </p>
      </div>
    </footer>
  )
}
