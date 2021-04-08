/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  // useCustomCursor: true, // Change this to false if you want the good'ol cursor
  // googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hi there 👋",
  title2: "",
  logo_name: "",
  nickname: "",
  full_name: "Luis Matos.",
  subTitle: "Frontend Developer Jr.",
  subTitle2: "React and React Native Developer.",
  resumeLink:
    "https://drive.google.com/file/d/1QXQkYyh1Wp63caWEi2TigxP37-sl_WDF/view?usp=sharing",
  mail: "mailto:ladrianmm@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/LAdrianMM",
  linkedin: "https://www.linkedin.com/in/luis-adrian-matos/",
  gmail: "ladrianmm@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  // twitter: "https://twitter.com/Harikrushn9",
  // instagram: "https://www.instagram.com/kanani_025/",
};

const skills = {
  data: [
    {
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "Develop interactive Front end / User Interfaces for your web and mobile applications",
        "Building responsive website front end using ReactJS",
        "Transform figma designs to clean and scalable code",
        "Developing mobile applications using React Native",
        "Work as a team, contribute ideas and improvements.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#479fad",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:material-ui",
          style: {
            color: "#39acf8",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#69c980",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "simple-icons:styled-components",
          style: {
            color: "#f7ca4a",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#734cb6",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            backgroundColor: "#61DAFB",
            borderRadius: "50%",
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#8558cf",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#FFFFFF",
          },
        },
      ],
    },
    {
      title: "Next I'll Learn",
      fileName: "CloudInfraImg",
      skills: [
        // "Experience working on multiple cloud platforms",
        // "⚡ Experience hosting and managing websites",
        // "⚡ Experience with Continuous Integration",
        "",
      ],
      softwareSkills: [
        {
          skillName: "Node",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#7fc728",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dr. S. & S. S. Ghandhy College Of Engineering & Technology",
      subtitle: "Diploma in Information Technology",
      logo_path: "ssgandhy.png",
      alt_name: "SETI",
      duration: "2018 - Present",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.ssgc.cteguj.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full-Stack Engineer",
      subtitle: "Codecademy **In Progress**",
      logo_path: "codecademy.png",
      alt_name: "Full-Stack Engineer",
      color_code: "#fdefe5",
      content:
        "Fullstack professional course PERN (Postgresql, Express, React and Node). Studying each language and framework in detail. Constant practice and versioning with git and github. Progress 15%",
    },
    {
      title: "Frontend Developer",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1cEdrXRg4YEMcVt_WqkIHGmjeYlzLBPVM/view?usp=sharing",
      alt_name: "Frontend Developer",
      color_code: "#97ca3f",
      content:
        "Basic frontend development course, doing practice in HTML, CSS, CSS Architectures, Flexbox, CSS Grid and Accessibility.",
    },
    {
      title: "Asynchronism with Javascript",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1EzKFbJ72zcsHLPIeqp9rK9xZtbW0VDLU/view?usp=sharing",
      alt_name: "Asynchronism",
      color_code: "#97ca3f",
      content:
        "Callbacks structures, requests to APIs using Callbacks, Promises implementation, solve problems with Promises, Async-await, solve problems with Async-await",
    },
    {
      title: "Javascript",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1tTXeVaFbjfJYfpYEY0TCHNhdm2VOdoCB/view?usp=sharing",
      alt_name: "Javascript",
      // color_code: "#F6B808",
      color_code: "#97ca3f",
      content:
        "Main functionalities of the language: Variables, Functions, Arrays, Loops, Conditionals, OOP, Arrow Functions, Asynchronism, Callbacks, Promises, among other basic functions of the language.",
    },
    {
      title: "Course Basic Javascript",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1qGt2i0PCp9pQAogb6luQZ4R4urGFUOTB/view?usp=sharing",
      alt_name: "Basic Javascript",
      // color_code: "#F6B808",
      color_code: "#97ca3f",
      content:
        "Giving an introduction to the programming language seeing definitions of Variables, Conditionals, Loops, Scope, Functions, Arrays, traversing Arrays.",
    },
    {
      title: "Web Development",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1pFnYU4LW-wEQFtvuXYSy42X5E5bloP9S/view?usp=sharing",
      alt_name: "HTML and CSS",
      // color_code: "#2AAFED",
      color_code: "#97ca3f",
      content:
        "Explaining the functions of the web, the structures of the pages and the different components that make them up, seeing in detail HTML and applicable styles in CSS",
    },
    {
      title: "Bootstrap",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/197ZGT2NGnf-mB9kU6f2Sp4OeK5Vsn9m1/view?usp=sharing",
      alt_name: "Bootstrap",
      color_code: "#97ca3f",
      content:
        "Practice with the css framework, using Buttons, AppBars, Inputs, Positions, Dimensions and more",
    },
    {
      title: "CSS Grid Layout",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1sICwKlYet6_48ZQeB2_h9QdldtY5CdSb/view?usp=sharing",
      alt_name: "CSS Grid",
      color_code: "#97ca3f",
      content:
        "Working in detail with Css grid layout, using columns, rows, grid-gap, positioning, responsive design and mobile first methodology",
    },
    {
      title: "Layout in CSS ",
      subtitle: "Platzi",
      logo_path: "platzi-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1iYiDHjTA32cZ-MS3GpkripmWbgLlwptF/view?usp=sharing",
      alt_name: "Layout in CSS",
      color_code: "#97ca3f",
      content:
        "Practice with the language of styles, practicing with specificity, colors, Flexbox, Grid, styles in lines and more",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// About Page
const about = {
  title: "About Me",
  subtitle: "Luis Adrian Matos Marrero",
  description:
    "At the age of 24, I am characterized by being a person full of energy, enthusiastic, responsible, self-taught, analytical, collaborative. In general, when I am in a new project I easily detect the problems that it may have, this encourages me to propose possible solutions so that the work is optimal.",
  description2:
    "The reason I decided to dedicate myself to web development is because this profession goes beyond a programming language, it is about taking an idea or problem and developing a program that solves it efficiently and creatively. This leads me to be in constant research and learning so that this solution is always the most innovative and scalable.",
  description3:
    " In my free time I like to walk on the beach, it is excellent to clear my mind and consolidate ideas. Spending quality time with my family and listening to music in English and Italian helps me get out of the routine.",
  header_image_path: "experience.svg",
  languages: [
    {
      title: "English",
      subtitle: "Between A2 and B1",
      logo_path: "english.png",
      color_code: "blue",
      alt_name: "ENG",
    },
    {
      title: "Italian",
      subtitle: "Between A2 and B1",
      logo_path: "italian.jpg",
      color_code: "green",
      alt_name: "ITA",
    },
    {
      title: "Spanish",
      subtitle: "Native",
      logo_path: "spanish.png",
      color_code: "red",
      alt_name: "ESP",
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
  ],
};

const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Frontend Developer (Trainner)",
          company: "Dudiprop",
          // company_url: "http://nightowls.company/",
          logo_path: "dudi.png",
          duration: "Oct 2020 - Present",
          location: "Work From Home",
          description:
            "Modify Front end of a new startup Dudiprop Argentina. Create new reusable components. Improve the user experience, adapt the website to all devices (responsive design). Streamline processes so that it is available to the public in a few months",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is creating Frontend projects in React.js and I have recently been practicing with React Native. I am constantly studying new technologies from the same branch of Javascript and there will be many more projects soon.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    phone: "+56 9 20686539",
    email: "ladrianmm@gmail.com",
    address: "Antofagasta, Chile",
    description:
      "Proactive, autodidact, responsible, teamwork and passionate about technology are just some qualities that describe me. If you need a good pillar in your team, contact me or leave me your information and I will contact you.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};
const projects = {
  data: [
    {
      id: "0",
      name: "Images Gallery",
      url: "https://github.com/LAdrianMM/images-gallery",
      // url: "https://606b4046a3138c22234fb2a8--vigorous-kare-6af51d.netlify.app/",
      description:
        "A simple page in React using TailwindCSS and API consumption",
      languages: [
        {
          name: "Javascript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "TailwindCSS",
          iconifyClass: "logos-tailwindcss-icon",
        },
        {
          name: "Fetch",
          iconifyClass: "carbon:api-1",
        },
      ],
    },
    {
      id: "1",
      name: "Netflix Clone",
      url: "https://github.com/LAdrianMM/netflix-clone",
      description:
        "Using React, Redux, Styled-components, Material UI, Firebase, among other technologies, I made a replica of the netflix page.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Redux",
          iconifyClass: "logos-redux",
        },
        {
          name: "React-Router",
          iconifyClass: "logos-react-router",
        },
        {
          name: "Material-UI",
          iconifyClass: "logos-material-ui",
        },
        {
          name: "Axios",
          iconifyClass: "carbon:api-1",
        },
      ],
    },
    {
      id: "2",
      name: "Airbnb Clone React Native",
      url: "https://github.com/LAdrianMM/airbnb-clone",
      description:
        "A little more complete application made in React Native, with navigation, google maps and more",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "React-Navigation",
          iconifyClass: "line-md:navigation-right-down",
        },
        {
          name: "Google Api",
          iconifyClass: "logos-google-maps",
        },
      ],
    },
    {
      id: "3",
      name: "CRUD User React Native",
      url: "https://github.com/LAdrianMM/crud-react-native",
      description:
        "Practical exercise of React Native doing a user CRUD (Create Read Update and Delete)",
      languages: [
        {
          name: "React Native",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "4",
      name: "Bienes Raices Page",
      url: "https://github.com/LAdrianMM/BienesRaices",
      description: "My first web page written only in HTML and CSS",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
  ],
};

export {
  about,
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
