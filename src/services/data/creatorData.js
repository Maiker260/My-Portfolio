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
    experience: [
        {
            name: "First Job",
            title: "Technical Support",
            years: 3,
            logo: "",
            description: "My previous Technical Support job",
            responsabilities: "",
        },
        {
            name: "Second Job",
            title: "Call Centero",
            years: 5,
            logo: "",
            description: "My previous job in a call center",
            responsabilities: "",
        },
        {
            name: "Sdecond Job",
            title: "Call Centero",
            years: 5,
            logo: "",
            description: "My previous job in a call center",
            responsabilities: "",
        },
        {
            name: "Secoand Job",
            title: "Call Centero",
            years: 5,
            logo: "",
            description: "My previous job in a call center",
            responsabilities: "",
        },
    ],
    infoList: [
        {
            name: "PROJECTS",
            component: "Projects",
            url: "/projects",
            titleType: "main",
        },
        {
            name: "EXPERIENCE",
            component: "Experience",
            url: "/experience",
            titleType: "third",
        },
        {
            name: "SKILLS",
            component: "Skills",
            url: "/skills",
            titleType: "sec",
        },
        {
            name: "ABOUT ME",
            component: "AboutMe",
            url: "/aboutme",
            titleType: "main",
        },
        {
            // EDUCATION????
            name: "DOWNLOAD CV",
            component: "DownloadCV",
            url: "/downloadcv",
            titleType: "third",
        },
        {
            name: "CONTACT",
            component: "Contact",
            url: "/contact",
            titleType: "sec",
        },
    ],
};
