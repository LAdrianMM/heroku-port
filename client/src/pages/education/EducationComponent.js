import React from "react";
import Header from "../../components/header/Header";
import Certifications from "../../containers/certifications/Certifications";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import { Fade } from "react-reveal";
import Footer from "../../components/footer/Footer";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
              Certifications
              </h1>
              {/* <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Basic Qualification and Certifications
              </h3> */}
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I constantly learn in online courses or videos. When I'm not studying programming, I listen to postcasts in Italian or English, to improve every day. I love to keep my mind busy.
              </p>
            </div>
          </div>
        </Fade>
        {/* <Educations theme={props.theme} /> */}
        <Certifications theme={props.theme} />
        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default Education;
