import { useEffect, useState } from "react";

export const useGeolocation = () => {
    const [coords,setCoords] = useState({lat:"",long:""});
    const [error,setError] = useState("");
    const onSuccess = event => {
        console.log(event);
        const {
            coords : {latitude:lat,longitude:long}
        }= event;
        setCoords({lat,long});
    };
    const onFailure = event => setError(event);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(onSuccess,onFailure);
    },[]);
    return {coords,error};
};
