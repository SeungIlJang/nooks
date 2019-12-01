import { useEffect, useState } from "react";

export const useInfiniteScroll = () => {
    const [page, setPage] = useState(1);
    function handleScroll() {
        if (
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.scrollHeight
        ) {
            setPage(p => p + 1);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    return page;
};


const useInfiniteScroll_ =() => {
    const [page, setPage] = useState(1);

    const handleScroll = () => {

        console.log(
            "scrollTop:",
            document.documentElement.scrollTop,
            "scrollHeight:",
            document.documentElement.scrollHeight,
            "offsetHeight:",
            document.documentElement.offsetHeight,
            "clientHeight:",
            document.documentElement.clientHeight
        );

        let scrollTop = document.documentElement.scrollTop;
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight;

        console.log(
            "scrollTop:" + scrollTop,
            "clientHeight:" + clientHeight,
            "scrollHeight:" + scrollHeight + " = ",
            scrollTop + clientHeight
        );

        if (scrollTop + clientHeight === scrollHeight) {
            // if (
            //     document.documentElement.scrollTop + window.innerHeight ===
            //     document.documentElement.scrollHeight){

            setPage(p => p+1);
            // setState(state => {
            //     console.log("setState",state);
            //     callMovies(state);
            //     return state +1;
            // });

        }
    };

    useEffect(() => {
        // callMovies();
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, []);

    return page;

};
