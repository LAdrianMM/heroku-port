import React from "react"
import Header from "../../components/header/Header"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import { Fade } from "react-reveal"
import { projectsHeader, projects } from "../../portfolio.js"
import "./Projects.css"
import ProjectsImg from "./ProjectsImg"
import { style } from "glamor"
import { experience } from "../../portfolio.js"
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion"
import Footer from "../../components/footer/Footer"

function Projects(props) {
  const openRepoinNewTab = (url) => {
    let win = window.open(url, "_blank");
    win.focus();
  }
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  })

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Fade bottom duration={2000} distance='40px'>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
      </Fade>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, index) => {
          return <ProjectCard key={index} repo={repo} theme={theme} />
        })}
      </div>
      <br />
      <br />
      <br />
      <button
        onClick={() => openRepoinNewTab("https://github.com/LAdrianMM")}
        {...styles}
        className="general-btn"
      >
        More Projects (Github)
      </button>
      <div style={{height: '50px'}}></div>
      <Footer theme={theme} />
    </div>
  )
}

export default Projects;
