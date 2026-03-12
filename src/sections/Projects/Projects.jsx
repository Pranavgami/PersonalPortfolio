import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/streaming-app-img.png";
import chat from "../../assets/chat.png";
import ProjectCard from "../../common/ProjectCard";
import globe from "../../assets/globe.png";
import todo from "../../assets/todo.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Pranavgami/SkyMeet"
          h3="Skymeet"
          p="Streaming App"
        />
        <ProjectCard
          src={chat}
          link="https://github.com/Pranavgami/ChatterBox"
          h3="ChatterBox"
          p="Websocket Chat Website"
        />
        <ProjectCard
          src={todo}
          link="https://github.com/Pranavgami/Bookify"
          h3="Bookify"
          p="Old Book Selling Platform"
        />
        <ProjectCard
          src={globe}
          link="https://github.com/Pranavgami/the-wild-oasis-website"
          h3="The Wild Oasis"
          p="Hotel Booking Website"
        />
      </div>
    </section>
  );
}

export default Projects;
