import { icons } from "../../components/icons/icons.js";
import { projectData } from "./Projects.js";
import { experienceData } from "./experiences.js";
import { skillsData } from "./skills.js";
import { educationData } from "./education.js";

export const creatorData = {
    author: {
        name: "Miker Gutierrez",
        profileData: [
            "Experienced Tech Support Engineer with 7+ years of experience in Networking, Server Administration, Troubleshooting, Customer Service, etc.",
            "My current goal is to keep up my professional career by using my experience while continuing to grow my knowledge and skill set.",
        ],
        profilePicture: "/other/testImage.avif",
    },
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
    experiences: experienceData,
    skills: skillsData,
    education: educationData,
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
            name: "EDUCATION",
            component: "Education",
            url: "/education",
            titleType: "third",
        },
        {
            name: "ABOUT ME",
            component: "AboutMe",
            url: "/aboutme",
            titleType: "main",
        },
        // ???????????????????????????????
        // {
        //     name: "CONTACT",
        //     component: "Contact",
        //     url: "/contact",
        //     titleType: "sec",
        // },
    ],
};
