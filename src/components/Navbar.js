// components/Navbar.js
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>News Aggregator</div>
    </nav>
  );
}
