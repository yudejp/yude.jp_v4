import { useEffect } from "react";
import { Theme, useSetTheme } from "@/lib/theme";

type Props = {
    children: JSX.Element;
};

const ThemeProvider = ({ children }: Props): JSX.Element => {
    const setTheme = useSetTheme();

    useEffect(() => {
        const root = window.document.documentElement;
        const initialColorValue = root.getAttribute("data-theme");
        setTheme(initialColorValue as Theme);
    }, [setTheme]);

    return (
        <>
            <script
                dangerouslySetInnerHTML={{
                    __html: `!function(){let e;const t=window.localStorage.getItem("theme");if(null!==t)e=t;else{e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",e)}();`,
                }}
            />
            {children}
        </>
    );
};

export default ThemeProvider;