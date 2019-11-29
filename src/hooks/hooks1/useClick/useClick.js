import {useEffect, useRef } from "react";

export const useClick = onClick => {
    const element = useRef();

    useEffect(() => {
        //componentDidMount componentWillUpdate
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        //componentWillUnMount
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            }
        };
    }, []);
    return element;
};
