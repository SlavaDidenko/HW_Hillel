import styles from './Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <a href="../../public/index.html" className={styles.logo}>Snicks Picky</a>
        <nav className={styles.nav}>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <a
                className={styles["nav-link"]}
                href="./">
                ABOUT</a>
            </li>
            <li className={styles["nav-item"]}>
              <a
                className={styles["nav-link"]}
                href="./">
                SKILLS</a>
            </li>
            <li className={styles["nav-item"]}>
              <a
                className={styles["nav-link"]}
                href="./">
                SERVICES</a>
            </li>
            <li className={styles["nav-item"]}>
              <a
                className={styles["nav-link"]}
                href="./">
                PORTFOLIO</a>
            </li>
          </ul>
          </nav>
        </div>
    </header>
  )
}