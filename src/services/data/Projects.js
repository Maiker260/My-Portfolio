import { icons } from "../../components/icons/icons.js";

export const projectData = [
    // NEED ORGANIZE THE DATA
    {
        name: "File Uploader",
        type: "Full-Stack",
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
                src: "/screenshots/file-uploader/Login-SignUp.png",
                alt: "Login-SignUp",
            },
            { src: "/screenshots/file-uploader/Home.png", alt: "Home" },
            {
                src: "/screenshots/file-uploader/CreateFolderForm.png",
                alt: "CreateFolderForm",
            },
            {
                src: "/screenshots/file-uploader/UploadFileForm.png",
                alt: "UploadFileForm",
            },
        ],
        livePreviewURL: "https://file-uploader-6gao.onrender.com",
        codeURL: "https://github.com/Maiker260/File-Uploader/",
    },
    {
        name: "My Blog",
        type: "Full-Stack",
        skills: [
            { name: "React", icon: icons.React },
            { name: "Tailwind", icon: icons.Tailwind },
            { name: "Node.js", icon: icons["Node.js"] },
            { name: "Express", icon: icons.Express },
            { name: "Prisma", icon: icons.Prisma },
            { name: "JWT", icon: icons.JWT },
            { name: "Passport.js", icon: icons["Passport.js"] },
        ],
        screenshots: [
            { src: "/screenshots/my-blog/Admin-Main.png", alt: "Admin-Main" },
            {
                src: "/screenshots/my-blog/Admin-Editor.png",
                alt: "Admin-Editor",
            },
            { src: "/screenshots/my-blog/Public-Main.png", alt: "Public-Main" },
            {
                src: "/screenshots/my-blog/Public-Article.png",
                alt: "Public-Article",
            },
        ],
        livePreviewURL: "https://my-blog-805.pages.dev/",
        codeURL: "https://github.com/Maiker260/My-Blog",
    },
    {
        name: "Shopping Cart",
        type: "Front-End",
        skills: [
            { name: "React", icon: icons.React },
            { name: "JavaScript", icon: icons.Javascript },
            { name: "CSS", icon: icons.CSS },
        ],
        screenshots: [
            { src: "/screenshots/shopping-cart/Home.png", alt: "Home" },
            { src: "/screenshots/shopping-cart/Cart.png", alt: "Cart" },
            {
                src: "/screenshots/shopping-cart/Categories.png",
                alt: "Categories",
            },
            { src: "/screenshots/shopping-cart/Search.png", alt: "Search" },
        ],
        livePreviewURL: "https://shopping-cart-c43.pages.dev/",
        codeURL: "https://github.com/Maiker260/Shopping-Cart",
    },
    {
        name: "Members Only",
        type: "Back-End",
        skills: [
            { name: "Node.js", icon: icons["Node.js"] },
            { name: "Express", icon: icons.Express },
            { name: "PostgreSQL", icon: icons.Postgresql },
            { name: "Passport.js", icon: icons["Passport.js"] },
        ],
        screenshots: [
            { src: "/screenshots/members-only/Home.png", alt: "Home" },
            {
                src: "/screenshots/members-only/Login-SignUp.png",
                alt: "Login-SignUp",
            },
            { src: "/screenshots/members-only/Main.png", alt: "Main" },
        ],
        livePreviewURL: "https://members-only-h8am.onrender.com/",
        codeURL: "https://github.com/Maiker260/Members-Only",
    },
    {
        name: "To-Do List",
        type: "Front-End",
        skills: [
            { name: "JavaScript", icon: icons.Javascript },
            { name: "CSS", icon: icons.CSS },
            { name: "Webpack", icon: icons.Webpack },
        ],
        screenshots: [
            { src: "/screenshots/to-do-list/Home.png", alt: "Home" },
            { src: "/screenshots/to-do-list/NewTask.png", alt: "NewTask" },
            {
                src: "/screenshots/to-do-list/TaskInfo.png",
                alt: "TaskInfo",
            },
        ],
        livePreviewURL: "https://maiker260.github.io/To-Do-List/",
        codeURL: "https://github.com/Maiker260/To-Do-List",
    },
];
