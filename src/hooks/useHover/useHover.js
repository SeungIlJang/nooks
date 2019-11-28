import {useEffect,useRef} from "react";

export const useHover = onHover => {
    const element = useRef();
    // if (typeof onHover !== "function") {
    //     return;
    // }

    useEffect(() => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }, []);
    return element;
};
