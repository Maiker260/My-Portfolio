import IconWithName from "./icons/IconWithName.jsx";
import { Github } from "../../icons/Github.jsx";
import { Linkedin } from "../../icons/Linkedin.jsx";

function SocialMediaIcons() {
    return (
        <article className="flex flex-col gap-14 mr-7">
            <IconWithName icon={Github} name="Github" />
            <IconWithName icon={Linkedin} name="LinkedIn" />
        </article>
    );
}

export default SocialMediaIcons;
