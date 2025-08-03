import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <h1>JobFinder</h1>
      </Link>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/jobs"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Jobs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
