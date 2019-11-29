import {useState,useEffect} from "react";

export const useKeyPress = key => {
    const [isPress, setIsPress] = useState(false);

    const onDown = event => {
        if (event.key === key) {
            setIsPress(true);
        }
    };
    const onUp = event => {
        if (event.key === key) {
            setIsPress(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", onDown);
        window.addEventListener("keyup", onUp);
        return () => {
            window.removeEventListener("keydown", onDown);
            window.removeEventListener("keyup", onUp);
        };
    }, []);

    return isPress;
};
