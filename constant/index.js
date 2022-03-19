import {
  SiFirebase,
  SiOctopusdeploy,
  SiMicrosoftoutlook,
  SiVisualstudiocode,
  SiMicrosoftsqlserver,
} from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaDev,
  FaDatabase,
  FaStackOverflow,
  FaGithub,
} from "react-icons/fa";
import { CgAlbum } from "react-icons/cg";
import { FiMail } from "react-icons/fi";

const menuLinks = [
  { name: "About Me", route: "/about" },
  // { name: "Experience", route: "/experience" },
  // { name: "Projects", route: "/projects" },
  { name: "GitHub", route: "/github" },
  { name: "Articles", route: "/article" },
  { name: "Contact", route: "/contact" },
];

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Danish Saleem. All Rights Reserved.`,
  author: {
    name: "Danish Saleem",
    accounts: [
      {
        url: "https://github.com/mrdanishsaleem",
        icon: <FaGithub />,
        name: "Github",
        type: "gray",
      },
      {
        url: "https://stackoverflow.com/users/11249940/mrdanishsaleem",
        icon: <FaStackOverflow />,
        name: "StackOverflow",
        type: "orange",
      },
      {
        url: "https://dev.to/mrdanishsaleem/",
        icon: <FaDev />,
        name: "Dev",
        type: "gray",
      },
      {
        url: "mailto:danish_s@outlook.com",
        icon: <SiMicrosoftoutlook />,
        name: "Microsoftoutlook",
        type: "blue",
      },
    ],
  },
};

const resume = {
  url: "https://mrdanishsaleem.notion.site/Resume-46d106ce5e9e46ae8ff9926cf4321c5b",
  icon: <CgAlbum />,
  name: "Resume",
};

const techStacks = [
  {
    name: "HTML5",
    icon: <FaHtml5 fontSize="20px" />,
    url: "#",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt fontSize="20px" />,
    url: "#",
  },
  {
    name: "Javascript",
    icon: <FaJs fontSize="20px" />,
    url: "#",
  },
  {
    name: "Database",
    icon: <FaDatabase fontSize="20px" />,
    url: "#",
  },
  {
    name: "Firebase",
    icon: <SiFirebase fontSize="20px" />,
    url: "https://firebase.google.com/",
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt fontSize="20px" />,
    url: "https://www.gitlab.com/",
  },
  {
    name: "RapidAPI",
    icon: <SiOctopusdeploy fontSize="20px" />,
    url: "https://rapidapi.com/",
  },
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode fontSize="20px" />,
    url: "https://rapidapi.com/",
  },
  {
    name: "Microsoft SQL Server",
    icon: <SiMicrosoftsqlserver fontSize="20px" />,
    url: "https://rapidapi.com/",
  },
];

const companies = [
  {
    title: "University of South Asia",
    alt: "usa",
    url: "https://usa.edu.pk/",
    role: "Software Engineer",
    skills: ["Javascript", "React", "Microsoft SQL Server"],
    period: "Feb 2022 - Present",
    logo: "/qumon.png",
  },
  {
    title: "Beyond Dispatch",
    alt: "beyond dispatch",
    url: "https://www.beyonddispatch.com/",
    role: "Web Developer",
    skills: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP", "MySQL"],
    period: "Aug 2021 - Feb 2022",
    logo: "/timetec.png",
  },
  {
    title: "YumyApps",
    alt: "yumyapps",
    url: "https://www.yumyapps.com/",
    role: "Mobile Application Developer Intern",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Appium Automation Testing",
      "MySQL",
    ],
    period: "Sep 2019 - Feb 2021",
    logo: "/timetec.png",
  },
  {
    title: "Techleadz",
    alt: "techleadz",
    url: "https://techleadz.com/",
    role: "SQA, Engineer, Data Analyst & Automation Engineer",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Python",
      "Selenium",
      "Automated Testing",
      "Microsoft SQL Server",
    ],
    period: "May 2019 - Sep 2019",
    logo: "/timetec.png",
  },
  {
    title: "Maavan",
    alt: "maavan",
    url: "https://www.maavan.com/",
    role: "SEO Optimizer & Web Developer",
    skills: [
      "SEO",
      "Social Media Marketing",
      "HTML5",
      "CSS3",
      "JavaScript",
      "WordPress",
    ],
    period: "Oct 2017 - Mar 2019",
    logo: "/timetec.png",
  },
];

const educations = [
  {
    title: "University Technology Malaysia (UTM)",
    alt: "utm image",
    url: "https://www.utm.my/",
    role: "Bachelor's Degree in Computer Science (Network and Security)",
    skills: ["CGPA - 3.79", "CCNA", "Security Management", "Network Security"],
    period: "Sept 2016 - Sept 2020",
    logo: "/utm.png",
  },
  {
    title: "SMK Mentakab",
    alt: "smk image",
    url: "https://www.facebook.com/pages/category/College---university/Sekolah-Menengah-Kebangsaan-Mentakab-224802077565350/",
    role: "STPM - Science Stream (Physics)",
    skills: ["CGPA - 3.33", "Math T", "Physics", "Chemistry"],
    period: "Jan 2015 - Jun 2016",
    logo: "/smk.png",
  },
];

const liveProjects = [
  {
    name: "Chativo",
    imageUrl:
      "https://play-lh.googleusercontent.com/tgLiP-ZL-sBuZt2RzDU1tN88Cp7NPbdjF7c0311_dui86f1HrAQM0j4gXaRE0pb5zW0=s360-rw",
    alt: "chativo",
    summary:
      "Enterprise ready live-chat base customer support & engagement software",
    playstore: "https://play.google.com/store/apps/details?id=io.chativo.chat",
    appstore: "https://apps.apple.com/us/app/chativo/id1545295884",
  },
  {
    name: "ChativoV",
    imageUrl:
      "https://play-lh.googleusercontent.com/5U5s7sSIuzP6CygPkU2ZYxyOXT-MKv7oiyweGKHgkEgVameOcYt44rnXqCTWZJNZgVqn=s360-rw",
    alt: "chativo-v",
    summary:
      "Live-chat specifically designed for visitors to communicate with real-time agent instantly",
    playstore:
      "https://play.google.com/store/apps/details?id=io.chativo.visitor",
    appstore: "https://apps.apple.com/us/app/chativov/id1595519177",
  },
];

export {
  menuLinks,
  techStacks,
  siteConfig,
  resume,
  companies,
  educations,
  liveProjects,
};
