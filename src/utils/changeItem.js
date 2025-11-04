// Less than 0, go to the last Item, if reaches the last Item, then, go to the first Item.
export const changeItem = (page, totalItems, navigate, path) => {
    const itemId =
        page < 0
            ? Number(totalItems - 1)
            : page > Number(totalItems - 1)
            ? 0
            : page;

    navigate(`/${path}/${itemId}`);
};
