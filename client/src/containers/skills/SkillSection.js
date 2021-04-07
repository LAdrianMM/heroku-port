import React from "react"
import "./Skills.css"
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill"
import { skills } from "../../portfolio"
import { Fade } from "react-reveal"
import FullStackImg from "./FullStackImg"
import CloudInfraImg from "./CloudInfraImg"
import { FcCheckmark } from "react-icons/fc"

// import DesignImg from "./DesignImg"

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />
  // return <DesignImg theme={props.theme} />
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="skills-main-div">
              <Fade bottom duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade bottom duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade top duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade bottom duration={2000}>
                  <div style={{textAlign: 'center'}}>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          <FcCheckmark key={index} />
                          {' '}
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          )
        } else {
          return (
            <div key={index} className="skills-main-div">
              <div className="skills-text-div">
                <Fade bottom duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade top duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade bottom duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
              <Fade bottom duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>
            </div>
          )
        }
      })}
    </div>
  );
}

export default SkillSection;