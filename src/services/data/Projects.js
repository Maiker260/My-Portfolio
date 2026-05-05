import { icons } from "../../components/icons/icons.js";

export const projectData = [
    {
        name: "Voice PC Automation",
        title: "Back-End",
        skills: [
            { name: "Python", icon: icons.Python },
            { name: "FastAPI", icon: icons.FastAPI },
            { name: "Alexa Dev Console", icon: icons.Alexa },
            { name: "AWS Lambda", icon: icons.Aws },
            { name: "AWS API Gateway", icon: icons.Aws },
            { name: "AWS DynamoDB", icon: icons.Aws },
            { name: "Cloudflare Tunneling", icon: icons.Cloudflare },
        ],
        screenshots: [
            {
                src: "/screenshots/alexa-pc-control/voice-control-automation-demo.gif",
                alt: "demo",
            },
        ],
        livePreviewURL: "",
        codeURL: "https://github.com/Maiker260/alexa_pc_control_voice",
    },
    {
        name: "Log Report Generator",
        title: "Back-End",
        skills: [
            { name: "Python", icon: icons.Python },
            { name: "Automation", icon: icons.Automation }
        ],
        screenshots: [
            {
                src: "/screenshots/horizon-report-generator/Fourth.webp",
                alt: "Windows Menu",
            },
            {
                src: "/screenshots/horizon-report-generator/First.webp",
                alt: "First",
            },
            {
                src: "/screenshots/horizon-report-generator/Second.webp",
                alt: "Second",
            },
            {
                src: "/screenshots/horizon-report-generator/Third.webp",
                alt: "Third",
            },
        ],
        livePreviewURL: "",
        codeURL: "https://github.com/Maiker260/horizon_report_generator",
    },
    {
        name: "File Uploader",
        title: "Full-Stack",
        skills: [
            { name: "Node.js", icon: icons["Node.js"] },
            { name: "Express", icon: icons.Express },
            { name: "EJS", icon: icons.EJS },
            { name: "Prisma", icon: icons.Prisma },
            { name: "AWS S3", icon: icons.Aws },
            { name: "Passport.js", icon: icons["Passport.js"] },
        ],
        screenshots: [
            {
                src: "/screenshots/file-uploader/Login-SignUp.webp",
                alt: "Login-SignUp",
            },
            { src: "/screenshots/file-uploader/Home.webp", alt: "Home" },
            {
                src: "/screenshots/file-uploader/CreateFolderForm.webp",
                alt: "CreateFolderForm",
            },
            {
                src: "/screenshots/file-uploader/UploadFileForm.webp",
                alt: "UploadFileForm",
            },
        ],
        livePreviewURL: "https://file-uploader-6gao.onrender.com",
        codeURL: "https://github.com/Maiker260/File-Uploader/",
    }
];
