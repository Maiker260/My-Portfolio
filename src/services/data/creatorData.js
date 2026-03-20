import { icons } from "../../components/icons/icons.js";
import { projectData } from "./Projects.js";
import { experienceData } from "./experiences.js";
import { skillsData } from "./skills.js";
import { educationData } from "./education.js";
import { mainPageInfo } from "./mainPageInfo.js";
import { referencesData } from "./references.js";

export const creatorData = {
    author: {
        name: "Miker Gutierrez S.",
        jobPosition: "Technical Support Engineer",
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
    infoList: mainPageInfo,
    references: referencesData,
};
