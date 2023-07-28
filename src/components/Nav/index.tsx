import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navName}>Rowil.Dev</div>
      <ul className={styles.navList}>
        <a className={styles.navLinks}>Home</a>
        <a className={styles.navLinks}>About</a>
        <a className={styles.navLinks}>Contact</a>
      </ul>
    </nav>
  );
};
export default Nav;
