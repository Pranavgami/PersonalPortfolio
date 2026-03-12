import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>

      {/* Contact Links */}
      <div className={styles.contactLinks}>
        <a
          href="mailto:pranavgami2003@gmail.com?subject=Contact from Portfolio&body=Hello Pranav,"
          className={styles.contactLink}
        >
          <span>Email Me</span>
        </a>

        <a
          href="https://www.linkedin.com/in/pranav-gami-b67b56281/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <span>DM me on LinkedIn</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
