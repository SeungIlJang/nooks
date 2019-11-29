import {useState} from "react";
export const useLockScroll = () => {
    const [initiaScroll] = useState(document.body.style.overflow);
    const [isLocked, setIsLocked] = useState(false);
    const lockScroll = () => {
        document.body.style.overflow = "hidden";
        setIsLocked(true);
    };
    const unlockScroll = () => {
      document.body.style.overflow=initiaScroll;
      setIsLocked(false);
    };

    return [isLocked, { lockScroll, unlockScroll }];
};
