import { Github } from "../../icons/Github.jsx";

const testIcons = [
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
    { name: "Github", icon: Github },
];

function SkillIconList() {
    return (
        <article className="flex gap-4 items-center absolute bottom-5 left-24 transform -rotate-11 origin-bottom-left">
            {testIcons.map(({ name, icon: Icon }, index) => (
                <div
                    key={index}
                    className="w-10 h-10 rounded-full bg-main-color-details flex items-center justify-center"
                    title={name}
                >
                    <Icon className={"pointer-events-none"} />
                </div>
            ))}
        </article>
    );
}

export default SkillIconList;
