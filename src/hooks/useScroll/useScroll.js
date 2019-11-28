import {useState,useEffect} from "react";
export const useScroll = () => {
    const [state,setState] = useState({
        x:0,
        y:0
    });
    const onScroll = () => {
        setState({x:window.scrollX,
            y:window.scrollY
        });
        console.log(window.scrollY,window.scrollX);
    }
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    },[]);
    return state;
};
