import { icons } from "../../components/icons/icons.js";

export const projectData = [
    // NEED ORGANIZE THE DATA
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
    },
    {
        name: "My Blog",
        title: "Full-Stack",
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
            { src: "/screenshots/my-blog/Admin-Main.webp", alt: "Admin-Main" },
            {
                src: "/screenshots/my-blog/Admin-Editor.webp",
                alt: "Admin-Editor",
            },
            {
                src: "/screenshots/my-blog/Public-Main.webp",
                alt: "Public-Main",
            },
            {
                src: "/screenshots/my-blog/Public-Article.webp",
                alt: "Public-Article",
            },
        ],
        livePreviewURL: "https://my-blog-805.pages.dev/",
        codeURL: "https://github.com/Maiker260/My-Blog",
    },
    {
        name: "Shopping Cart",
        title: "Front-End",
        skills: [
            { name: "React", icon: icons.React },
            { name: "JavaScript", icon: icons.Javascript },
            { name: "CSS", icon: icons.CSS },
        ],
        screenshots: [
            { src: "/screenshots/shopping-cart/Home.webp", alt: "Home" },
            { src: "/screenshots/shopping-cart/Cart.webp", alt: "Cart" },
            {
                src: "/screenshots/shopping-cart/Categories.webp",
                alt: "Categories",
            },
            { src: "/screenshots/shopping-cart/Search.webp", alt: "Search" },
        ],
        livePreviewURL: "https://shopping-cart-c43.pages.dev/",
        codeURL: "https://github.com/Maiker260/Shopping-Cart",
    },
    {
        name: "Members Only",
        title: "Back-End",
        skills: [
            { name: "Node.js", icon: icons["Node.js"] },
            { name: "Express", icon: icons.Express },
            { name: "PostgreSQL", icon: icons.Postgresql },
            { name: "Passport.js", icon: icons["Passport.js"] },
        ],
        screenshots: [
            { src: "/screenshots/members-only/Home.webp", alt: "Home" },
            {
                src: "/screenshots/members-only/Login-SignUp.webp",
                alt: "Login-SignUp",
            },
            { src: "/screenshots/members-only/Main.webp", alt: "Main" },
        ],
        livePreviewURL: "https://members-only-h8am.onrender.com/",
        codeURL: "https://github.com/Maiker260/Members-Only",
    },
    {
        name: "To-Do List",
        title: "Front-End",
        skills: [
            { name: "JavaScript", icon: icons.Javascript },
            { name: "CSS", icon: icons.CSS },
            { name: "Webpack", icon: icons.Webpack },
        ],
        screenshots: [
            { src: "/screenshots/to-do-list/Home.webp", alt: "Home" },
            { src: "/screenshots/to-do-list/NewTask.webp", alt: "NewTask" },
            {
                src: "/screenshots/to-do-list/TaskInfo.webp",
                alt: "TaskInfo",
            },
        ],
        livePreviewURL: "https://maiker260.github.io/To-Do-List/",
        codeURL: "https://github.com/Maiker260/To-Do-List",
    },
];
