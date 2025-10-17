import { Github } from "../../components/icons/Github.jsx";

export const testProjectData = [
    {
        name: "My Blog",
        type: "Full-Stack",
        skills: [
            { name: "React", icon: Github },
            { name: "Tailwind", icon: Github },
            { name: "Node.js", icon: Github },
            { name: "Express", icon: Github },
            { name: "Prisma", icon: Github },
            { name: "JWT", icon: Github },
            { name: "Passport.js", icon: Github },
        ],
        screenshots: [
            { src: "/test/preview.png", alt: "Screenshot1" },
            { src: "/test/preview2.png", alt: "Screenshot2" },
            { src: "/test/preview3.png", alt: "Screenshot3" },
            { src: "/test/preview4.png", alt: "Screenshot4" },
        ],
        livePreviewURL: "https://my-blog-805.pages.dev/",
        codeURL: "https://github.com/Maiker260/My-Blog",
    },
];
