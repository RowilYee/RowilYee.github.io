import styles from "./Home.module.css";
import ProgrammingImg from "../../assets/programming.svg";

const Home = () => {
  return (
    <div className="container">
      <section className={styles.sectionContainer}>
        <div className={styles.homeDescription}>
          Hi! I'm<span className={styles.homeName}> Rowil</span>- a Front-End
          React Developer based in Zamboanga City, Philippines.
        </div>
        <img
          className={styles.homeImg}
          src={ProgrammingImg}
          alt="programmer on desk"
        ></img>
      </section>
    </div>
  );
};

export default Home;
