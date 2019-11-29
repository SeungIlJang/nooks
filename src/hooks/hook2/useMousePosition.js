import {useState,useEffect} from "react";

export const useMousePosition = () => {
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

    const onMove = event => {
        const { clientX, clientY } = event;
        setMouseCoords({ x: clientX, y: clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", onMove);
        return () => {
            window.removeEventListener("mousemove", onMove);
        };
    }, []);
    return mouseCoords;
};
