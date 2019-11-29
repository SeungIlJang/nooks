import { useState } from "react";

export const useLocalStorage = (name, initialValue) => {
    const [currentLS, changeLS] = useState(()=>{
        try{
            const item = localStorage.getItem(name);
            return  item ? JSON.parse(item) : initialValue;
        }catch (e) {
            return initialValue;
        }
    });

    const setLS =( newValue)=>{
      try {
          changeLS(newValue);
          localStorage.setItem(name,JSON.stringify(newValue));
      }catch (e) {
        console.log(e);
      }
    };

    return { currentLS, setLS };
};
