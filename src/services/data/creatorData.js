import { icons } from "../../components/icons/icons.js";
import { projectData } from "./Projects.js";
import { experienceData } from "./experiences.js";
import { skillsData } from "./skills.js";
import { educationData } from "./education.js";

export const creatorData = {
    author: {
        name: "Miker Gutierrez",
        profilePicture: "/other/avatar.webp",
        profileData: [
            "Experienced Tech Support Engineer with 7+ years of experience in Networking, Server Administration, Troubleshooting, Customer Service, etc.",
            "Over time, I discovered a strong passion for coding. I'm now developing my skills in modern web technologies, including JavaScript, React, and Tailwind, with a focus on building clean, responsive, and user-friendly interfaces.",
        ],
        workingOn: [
            "Actively exploring opportunities in web development",
            "Building projects with JavaScript, React, and Tailwind",
            "Strengthening backend fundamentals with Node.js/Express",
            "Expanding my portfolio with real-world, problem-solving projects",
        ],
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
    ],
};
