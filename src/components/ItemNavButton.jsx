import { icons } from "./icons/icons.js";
import useArrowNavigation from "../hooks/useArrowNavigation.js";

function ItemNavButton({
    id,
    name,
    isFlipping = null,
    setIsFlipping = () => {},
    setButtonPressed,
    changeItem,
    totalItems,
    navigate,
    location,
    className,
    moreActions = () => {},
}) {
    const page = name === "next" ? Number(id) + 1 : Number(id) - 1;

    const NavSymbol = name === "prev" ? icons.BackArrow : icons.ForwardArrow;

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    const changeContent = (name) => {
        if (!isFlipping) {
            setIsFlipping(true);
            setButtonPressed(name);
            changeItem(page, totalItems, navigate, location);
            moreActions();
        }
    };

    useArrowNavigation({
        onLeft: name === "prev" ? () => changeContent("prev") : null,
        onRight: name === "next" ? () => changeContent("next") : null,
    });

    return (
        <button
            className={`${className} flex ${
                name === "next" && "flex-row-reverse"
            } items-center text-white group transition lg:text-[2vw] hover:cursor-pointer hover:scale-110`}
            onClick={changeContent}
        >
            <NavSymbol />
            <h2>{capitalizedName}</h2>
        </button>
    );
}

export default ItemNavButton;
