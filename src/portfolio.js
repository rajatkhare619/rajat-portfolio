/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Rajat Khare",
  logo_name: "Rajat",
  nickname: "Rajat",
  full_name: "Rajat Khare",
  subTitle: " a full Stack web developer with a focus on front end",
  resumeLink:
    "https://github.com/rajatkhare619/portfolio/raw/main/Rajat%20Khare.pdf",
  mail: "mailto:mail@rajatkhare.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/rajatkhare619",
  linkedin: "https://www.linkedin.com/in/rajatkhare619",
  email: "mail@rajatkhare.com",
  stackoverflow: "https://stackoverflow.com/users/3266218/rajat",
};

const skills = {
  data: [
    {
      title: "Prominent tools and technologies I have worked with",
      fileName: "FullStackImg",
      skills: [],
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
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
          skillName: "TypeScript",
          fontAwesomeClassname: "vscode-icons:file-type-typescript-official",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "NgRx",
          fontAwesomeClassname: "file-icons:ngrx",
          style: {
            color: "rgb(197 21 192)",
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
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "AngularJS",
          fontAwesomeClassname: "logos:angular-icon",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Ionic",
          fontAwesomeClassname: "logos:ionic-icon",
          style: {
            color: "#0865A6",
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
          skillName: "Gitlab",
          fontAwesomeClassname: "logos:gitlab",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Uttar Pradesh Technical University",
      logo_path: "uptu.png",
      alt_name: "UPTU",
      duration: "2010 - 2014",
      descriptions: [
        "⚡ Degree - Bachelor of Technology",
        "⚡ College - Noida Institute of Engineering and Technology",
        "⚡ Major - Computer Science & Engineering",
      ],
      website_link: "https://aktu.ac.in/",
    },
    {
      title: "Annamalai University",
      logo_path: "annamalai.png",
      alt_name: "AU",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Degree - Postgraduate diploma (Distance learning)",
        "⚡ Major - Natural Language Processing",
      ],
      website_link: "https://annamalaiuniversity.ac.in/index.php",
    },
    {
      title: "Cathedral College",
      logo_path: "cathedral.png",
      alt_name: "CC",
      duration: "1996 - 2010",
      descriptions: [
        "⚡ Degree - Secondary and Senior secondary",
        "⚡ Main subjects - Mathematics, Science, and Computer Science",
      ],
      website_link: "https://www.cathedralcollegejhansi.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Oracle Certified Associate, Java SE 8 Programmer",
      subtitle: "Oracle",
      logo_path: "oracle.png",
      certificate_link:
        "https://www.credly.com/badges/294dd9f8-2a80-498d-bdbd-086038d9efd9",
      alt_name: "Java 8",
      color_code: "#899a8a",
    },
    {
      title: "MTA: Windows Operating System Fundamentals - Certified 2016",
      subtitle: "Microsoft",
      logo_path: "microsoft.jpg",
      certificate_link:
        "https://www.credly.com/badges/8569f998-6a85-4e75-94f2-a1a1b928496b",
      alt_name: "Windows OS",
      color_code: "#E2405F",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  // subtitle: "Work, Internship and Volunteership",
  description:
    "I'm an innovative web developer with around 7 years of experience building stable, testable, and easily" +
    "maintainable large-scale responsive websites and Single Page Applications in insurance, investment " +
    "management, public sector, and business services industries." +
    " I have mostly worked with Angular but I'm also familiar with React.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Pitney Bowes",
      experiences: [
        {
          title: "Senior Software Engineer",
          // company: "Valora Infotech",
          company_url: "https://www.pitneybowes.com/",
          logo_path: "pitneybowes.jpg",
          duration: "April 2019 - Present",
          location: "Noida, India",
          description: `• Implemented a number of key functionalities in Spectrum Spatial Analyst – a web mapping application including annotations, login, Google Maps integration, and address search.
• Developed several reusable Angular directives and components keeping unit testing in mind
including a folder selection dialog with lazy loading functionality.
• Contributed to Spatial Manager – an application used to configure Spectrum Spatial Analyst including the ability to configure watermark images for Analyst, and WMS and TMS configuration.
• Developed several stages for Flow Designer – an application for transforming business data.
• Created a starter application based on the company's latest Design System showcasing its features.
• Containerized the application with Docker to host on the company's cloud platform.
• Setup CI/CD pipelines on Gitlab.

𝐓𝐞𝐜𝐡 𝐬𝐭𝐚𝐜𝐤 𝐮𝐬𝐞𝐝- HTML, CSS, JS, Angular (with NgRx), OpenLayers, Docker`,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Publicis Sapient",
      experiences: [
        {
          title: "Senior Interactive Developer L1",
          // company: "CWOC",
          company_url: "https://www.publicissapient.com/",
          logo_path: "publicissapient.png",
          duration: "March 2018 - March 2019",
          location: "Noida, India",
          description: `In one project, I worked as a UI developer using jQuery in AEM.
• Helped the client in transforming their website built with HTML + CSS + JS (jQuery) to one built on a CMS (Adobe Experience Manager 6.2).
• Followed Component-Driven Development (CDD) methodology to write HTML + CSS + JS components in AEM which can then be placed by the website authors to create the required behavior.
• Implemented the UI for login and registration functionalities - two of the most important functionalities of the website along with the integration of services written in Node.js.
• Developed the components keeping Internationalization (i18n) in mind.
• Helped in the implementation of the analytics on the website using DTM (Dynamic Tag Management) which is a part of the Adobe Marketing Cloud for tracking the visitors.
• Followed the Agile methodology and worked closely with BAs and testers using JIRA as a platform for tracking stories and bringing them to completion on target times.

In another project, I worked as an Angular developer.
• Worked on the creation of a Single Page Application (SPA) - a dashboard for tracking the assets of the users.
• Divided the application into multiple feature modules acting as logical divisions to decrease the complexity of development.
• Created reusable components that were used in multiple places across the application.
• Created services to consume the back-end API and these services were then injected in the components to populate charts.
• Implemented the routing in the application.
• Created forms using template-driven and reactive approaches to engage the users, validated user actions on the client-side and provided responsive feedback.

𝐓𝐞𝐜𝐡 𝐬𝐭𝐚𝐜𝐤 𝐮𝐬𝐞𝐝- HTML, CSS, JS, Angular, jQuery, AEM`,
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Accenture",
      experiences: [
        {
          title: "Application Development Analyst",
          // company: "CWOC",
          company_url: "https://www.accenture.com/",
          logo_path: "accenture.png",
          duration: "October 2014 - February 2018",
          location: "Bangalore, India",
          description: `Worked as a MEAN stack developer

Roles and responsibilities included:

• Developing complete features (UI and logic)
• Creating JSON stubs for faking the backend until backend services are not available
• Creating Angular services for fetching REST API data from backend and mapping it in the application
• Developing a hybrid mobile application that is performant and accommodated in devices (Android and iOS) of different sizes and resolutions
• Writing clean code to avoid as many bugs as possible and debugging quickly in case bugs creep in
• Following Agile methodology and adapting the ever-changing requirements of the clients
• Coordinating with graphic designers and translating the requirements specified in the Visual Design documents to actual code in HTML and CSS with high precision
• Creating web applications effectively while following the separation of concerns (SoC) principle using Angular to keep the code modular
• Writing unit test cases for the modules using Mocha as a testing framework and Chai for making assertions.

𝐓𝐞𝐜𝐡 𝐬𝐭𝐚𝐜𝐤 𝐮𝐬𝐞𝐝- HTML, CSS, JS, AngularJS, Angular, Node.js, Express.js, Ionic, MongoDB`,
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I usually work on side projects when I'm learning new skills to solidify my understanding. Following are some of the projects that I worked on:",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact me",
    profile_image_path: "rajat.jpg",
    //  description: "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
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
      name: "Reminder",
      url: "https://reminder619.firebaseapp.com/",
      description:
        "An application built with Angular that can be used to send messages to various platforms.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "TypeScript",
          iconifyClass: "vscode-icons:file-type-typescript-official",
        },
        {
          name: "Angular",
          iconifyClass: "vscode-icons:file-type-angular",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "1",
      name: "UnitCon",
      url: "https://www.microsoft.com/en-us/p/unitcon/9nblggh08zpd",
      description:
        "This is a unit conversion application for Windows Phone developed on C#",
      languages: [
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
      ],
    },
    {
      id: "2",
      name: "My portfolio",
      url: "https//rajatkhare.com",
      description: "My portfolio containing my education and experience",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "3",
      name: "Keyboard dictionary",
      url: "https://rajatkhare619.github.io/keyboardDictionary/",
      description:
        "It is a web application built in VanillaJS. It shows the meaning of random words starting with the key pressed on a keyboard.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
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
