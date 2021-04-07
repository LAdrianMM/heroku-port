import React from "react";
import Header from "../../components/header/Header";
// import Footer from "../../components/footer/Footer";
import "./About.css";
import { about } from "../../portfolio.js";
import { Fade } from "react-reveal";
import AboutImg from "./AboutImg";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import Footer from "../../components/footer/Footer";

function About(props) {
  const theme = props.theme;
  // console.log(props.setTheme);
  return (
    <div className="about-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-about">
        <Fade bottom duration={2000} distance="40px">
          <div className="about-heading-div">
            <div className="about-heading-img-div">
              <AboutImg theme={theme} />
            </div>
            <div className="about-heading-text-div">
              <h1
                className="about-heading-text"
                style={{ color: theme.text }}
              >
                {about.title}
              </h1>
              <h3
                className="about-heading-sub-text"
                style={{ color: theme.text }}
              >
                {about["subtitle"]}
              </h3>
              <p
                className="about-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {about["description"]}
              </p>
              <p
                className="about-header-detail-text p-desc2"
                style={{ color: theme.secondaryText }}
              >
                {about["description2"]}
              </p>
              <p
                className="about-header-detail-text p-desc3"
                style={{ color: theme.secondaryText }}
              >
                {about["description3"]}
              </p>
            </div>
          </div>
          <div className=''>
            <h3
                className="about-heading-sub-text"
                style={{ color: theme.text }}
              >
                Languages
              </h3>
              <div className='about-languages'>
                {
                  about.languages.map((lang, index) => {
                  return <CertificationCard key={index} certificate={lang} theme={theme} />
                  })
                }
              </div>
            </div>
        </Fade>
      </div>
      <Fade
        bottom
        duration={3000}
        distance='60px'
      >
        <Footer theme={props.theme} />
      </Fade>
    </div>
  );
}

export default About;
