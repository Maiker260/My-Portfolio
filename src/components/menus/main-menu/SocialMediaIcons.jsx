import IconWithName from "./icons/IconWithName.jsx";
import { Github } from "../../icons/Github.jsx";
import { Linkedin } from "../../icons/Linkedin.jsx";
import { Link } from "react-router-dom";

function SocialMediaIcons({ showContent }) {
    const icons = [
        {
            icon: Linkedin,
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mikergs26/",
        },
        { icon: Github, name: "Github", url: "https://github.com/Maiker260" },
    ];

    return (
        <article className="relative w-fit h-72 mr-7">
            {icons.map((item, index) => (
                <Link
                    to={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.name}
                    className="absolute left-0 w-full opacity-0 "
                    style={{
                        // Last icon first
                        "--i": icons.length - 1 - index,
                        animation: showContent
                            ? `dropBounce 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards ${
                                  index * 0.3
                              }s`
                            : "none",
                    }}
                >
                    <IconWithName icon={item.icon} name={item.name} />
                </Link>
            ))}
        </article>
    );
}

export default SocialMediaIcons;
