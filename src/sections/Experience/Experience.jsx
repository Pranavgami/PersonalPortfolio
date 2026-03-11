import styles from "./ExperienceStyles.module.css";

function Experience() {
  return (
    <section id="experience" className={styles.container}>
      <h1 className="sectionTitle">Experience</h1>

      <div className={styles.experienceCard}>
        <div className={styles.companyInfo}>
          <h3 className={styles.jobTitle}>Full Stack Engineer</h3>
          <h4 className={styles.companyName}>Furrisic Infotech</h4>
          <p className={styles.location}>Ahmedabad, Gujarat</p>
          <p className={styles.duration}>20 Jan 2025 - Till Now</p>
        </div>

        <div className={styles.jobDescription}>
          <p>
            Full Stack Engineer with 1+ years of experience in designing,
            developing, and maintaining scalable, high-performance web
            applications. Experienced in building end-to-end solutions using
            modern JavaScript technologies across both frontend and backend
            layers. Proficient in developing responsive user interfaces with
            React.js and building robust backend services using Node.js and
            Express.js. Strong expertise in designing RESTful APIs, implementing
            secure authentication mechanisms, optimizing database queries. Adept
            at collaborating with cross-functional teams to deliver efficient,
            maintainable, andproduction-ready applications while following
            industry best practices and clean architecture principles.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
