import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className={styles.homeLink}>
          Go back home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
