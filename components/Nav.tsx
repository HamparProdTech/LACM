import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Los Angeles <span>Capital</span>
      </div>
      <ul className={styles.links}>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Our Approach</a></li>
        <li><a href="#">Strategies</a></li>
        <li><a href="#">Insights</a></li>
        <li><a href="#">Responsible Investing</a></li>
      </ul>
      <a href="#contact" className={styles.cta}>Contact</a>
    </nav>
  )
}
