import Card from "../Card";
import styles from "./About.module.css";

const About = (props: string) => {
  const workExperience = [
    {
      id: 1,
      company: "Mega Fishing Corporation",
      position: "Senior Auditor",
      jobDescription: "lorem ipsum adsdasd",
    },
    {
      id: 2,
      company: "Mega Fishing Corporation",
      position: "ADA Supervisor",
      jobDescription:
        "lorem ipsum adsdasd asda sdas asd asd asd asd asd asd asd a",
    },
  ];
  console.log(workExperience);
  return (
    <section>
      <div>About</div>
      <div className={styles.cardContainer}>
        {workExperience.map((w) => (
          <Card
            companyName={w.company}
            position={w.position}
            jobDescription={w.jobDescription}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
