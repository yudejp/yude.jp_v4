import { atom, useRecoilState, useSetRecoilState } from "recoil";

export type Theme = "light" | "dark";

const themeState = atom<Theme>({
    key: "themeState",
    default: "light",
});

export const useSetTheme = () => useSetRecoilState(themeState);

export const useTheme = () => {
    const [theme, setTheme] = useRecoilState(themeState);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        window.localStorage.setItem("theme", newTheme);
        const root = window.document.documentElement;
        root.setAttribute("data-theme", newTheme);
        root.setAttribute("data-bs-theme", newTheme);
    };

    return { theme, toggleTheme };
};