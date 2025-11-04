import { icons } from "./icons/icons.js";

function ItemNavButton({
    name,
    setButtonPressed,
    changeItem,
    id,
    totalItems,
    navigate,
    location,
    className,
    moreActions = () => {},
}) {
    const page = name === "next" ? Number(id) + 1 : Number(id) - 1;

    const NavSymbol = name === "prev" ? icons.BackArrow : icons.ForwardArrow;

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <button
            className={`${className} flex ${
                name === "next" && "flex-row-reverse"
            } items-center text-4xl text-white group transition hover:cursor-pointer hover:scale-110 `}
            onClick={() => {
                setButtonPressed(name);
                changeItem(page, totalItems, navigate, location);
                moreActions();
            }}
        >
            <NavSymbol />
            <h2>{capitalizedName}</h2>
        </button>
    );
}

export default ItemNavButton;
