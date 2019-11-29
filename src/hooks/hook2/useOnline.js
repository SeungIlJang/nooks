import {useState,useEffect} from "react";
export const useOnline = () => {
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine);
    };
    useEffect(() => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    }, []);
    return status;
};
