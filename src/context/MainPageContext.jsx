import { createContext } from "react";

export const MainPageContext = createContext({
    backHomeTransition: false,
    setBackHomeTransition: () => {},
    currentPage: null,
    setCurrentPage: () => {},
    skillSelectedData: {},
    setSkillSelectedData: () => {},
});
