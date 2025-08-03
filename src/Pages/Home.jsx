import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import HeroImage from "../assets/HeroImage.svg";

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Find Your Dream Job</h1>
        <p className={styles.subtitle}>
          Discover roles in tech, design, marketing, and more — tailored for
          you.
        </p>
        <Link to="/jobs" className={styles.cta}>
          Browse Jobs
        </Link>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={HeroImage}
          alt="Job search illustration"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default Home;
