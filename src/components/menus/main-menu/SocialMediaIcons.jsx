import { Link } from "react-router-dom";
import { creatorData } from "../../../services/data/creatorData.js";
import IconWithName from "./icons/IconWithName.jsx";

function SocialMediaIcons({ showContent, isAnimationDisable, isDesktop }) {
    const contactData = creatorData.contact;

    const shouldAnimate = !isAnimationDisable && showContent;

    return (
        <article className="relative flex justify-center items-center gap-10 w-full h-fit lg:w-fit lg:block lg:h-72">
            {contactData.map((item, index) => {
                const delay = `${index * 0.3}s`;
                const offset = `calc(${
                    contactData.length - 1 - index
                } * 8.5rem)`;

                return (
                    <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.name}
                        className="static lg:absolute lg:left-0 w-fit h-fit lg:w-full"
                        style={{
                            "--i": contactData.length - 1 - index,
                            opacity: isAnimationDisable ? 1 : 0,
                            transform: isAnimationDisable
                                ? isDesktop && `translateY(${offset})`
                                : "none",
                            animation: shouldAnimate
                                ? isDesktop &&
                                  `dropBounce 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards ${delay}`
                                : "none",
                        }}
                    >
                        <IconWithName icon={item.icon} name={item.name} />
                    </Link>
                );
            })}
        </article>
    );
}

export default SocialMediaIcons;
