import { FaPaintBrush, FaCode, FaSearchengin, FaGit } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { RiExternalLinkLine } from "react-icons/ri";
import { mweb3 } from "../assets/assets";

export const navItems = [
  {
    id: "About",
    url: "#about",
  },
  {
    id: "Services",
    url: "#services",
  },
  {
    id: "Projects",
    url: "#projects",
  },
  {
    id: "Contact",
    url: "#contact",
  },
];

export const services = [
  {
    id: 0,
    ico: FaCode,
    title: "Web Development",
    desc: "I am a Frontend Web developer dedicated to crafting visually stunning and functionally robust digital experiences",
  },
  {
    id: 1,
    ico: FaPaintBrush,
    title: "UI/UX Design",
    desc: "Designing user-friendly and visually appealing interfaces with a focus on user experience and accessibility.",
  },
  {
    id: 2,
    ico: FaSearchengin,
    title: "SEO Optimization",
    desc: "Improving website visibility on search engines through advanced SEO techniques and best practices.",
  },
];

/*
I am a Frontend Web developer dedicated to crafting visually stunning and functionally robust digital experiences

I am a Frontend Web developer dedicated to Creating responsive and dynamic websites using modern technologies like HTML, CSS, JavaScript, and React.
*/

export const projects = [
  {
    id: 0,
    title: "Blog Website",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    ico: [GrGithub, RiExternalLinkLine],
    img: mweb3,
  },
  {
    id: 1,
    title: "Notes App",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    img: mweb3,
    ico: [GrGithub, RiExternalLinkLine],
  },
  {
    id: 2,
    title: "movie website",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    img: mweb3,
    ico: [GrGithub, RiExternalLinkLine],
  },
  {
    id: 3,
    title: "ecomerce Website",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    img: mweb3,
    ico: [GrGithub, RiExternalLinkLine],
  },
  {
    id: 4,
    title: "neco Clone",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    img: mweb3,
    ico: [GrGithub, RiExternalLinkLine],
  },
  {
    id: 5,
    title: "My Website",
    desc: "A brief description of the project, highlighting its features and purpose.",
    img: mweb3,
    tags: "HTML, CSS, JavaScript, react",
    gitIcon: FaGit,
    linkIcon: RiExternalLinkLine,
  },
];

export const projectsMore = [
  {
    id: 0,
    title: "Blog Website",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    ico: [GrGithub, RiExternalLinkLine],
    img: mweb3,
  },
  {
    id: 1,
    title: "Notes App",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    img: mweb3,
    ico: [GrGithub, RiExternalLinkLine],
  },
  {
    id: 2,
    title: "movie website",
    desc: "A brief description of the project, highlighting its features and purpose.",
    tags: "HTML, CSS, JavaScript, react",
    img: mweb3,
    ico: [GrGithub, RiExternalLinkLine],
  },
];
