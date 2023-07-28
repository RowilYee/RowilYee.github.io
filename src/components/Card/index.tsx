import styles from "./Card.module.css";

const Card = (props: string) => {
  return (
    <div className={styles.card}>
      <div className={styles.tools}>
        <div className={styles.circle}>
          <span className={`${styles.red} ${styles.box}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.yellow} ${styles.box}`}></span>
        </div>
        <div className={styles.circle}>
          <span className={`${styles.green} ${styles.box}`}></span>
        </div>
      </div>
      <div className={styles.cardConte}></div>
      <div className={styles.content}>Company Name: {props.companyName}</div>
      <div className={styles.content}>Position: {props.position}</div>
      <div className={styles.content}>Company Name: {props.jobDescription}</div>
    </div>
  );
};

export default Card;
