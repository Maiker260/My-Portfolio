import { icons } from "../../components/icons/icons.js";
import { projectData } from "./Projects.js";

export const creatorData = {
    contact: [
        {
            name: "LinkedIn",
            icon: icons.Linkedin,
            url: "https://www.linkedin.com/in/mikergs26/",
        },
        {
            name: "Github",
            icon: icons.Github,
            url: "https://github.com/Maiker260",
        },
    ],
    projects: projectData,
    infoList: [
        {
            name: "PROJECTS",
            titleType: "main",
            url: "/projects",
            component: "Projects",
        },
        {
            name: "EXPERIENCE",
            component: "Experience",
            titleType: "third",
        },
        {
            name: "SKILLS",
            component: "Skills",
            titleType: "sec",
        },
        {
            name: "ABOUT ME",
            component: "AboutMe",
            titleType: "main",
        },
        {
            // EDUCATION????
            name: "DOWNLOAD CV",
            component: "DownloadCV",
            titleType: "third",
        },
        {
            name: "CONTACT",
            component: "Contact",
            titleType: "sec",
        },
    ],
};
