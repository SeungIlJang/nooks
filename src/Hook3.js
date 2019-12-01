import React, { useEffect, useState } from "react";
import { getMovies } from "./api";
import './App.css';
import {useInfiniteScroll} from "./hooks/hook3/useInfiniteScroll";
import uniqBy from "lodash.uniqby";


function App() {
    const page = useInfiniteScroll();

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const callMovies = async (page) => {

        try {
            console.log(page);
            let {
                data: {
                    data: { movies:newMovies }
                }
            } = await getMovies(page);
            console.log("movies",movies);
            const alleMovies = [...movies, ...newMovies];
            console.log("alleMovies",alleMovies);
            const uniqMovies = uniqBy(alleMovies, "id");
            console.log("uniqMovies",uniqMovies);
            setMovies(uniqMovies);
        } catch (e) {
            console.log(e);
        }finally {
            setLoading(false);
        }
    };

    // const initMovies = async () => {
    //
    //     try {
    //         const {
    //             data: {
    //                 data: { movies }
    //             }
    //         } = await getMovies();
    //         setMovies(movies);
    //         console.log("init",movies);
    //     } catch (e) {
    //         console.log(e);
    //     }finally {
    //         setLoading(false);
    //     }
    // };
    useEffect(()=>{
        callMovies(page);
    },[page]);

    // useEffect( ()=>{
    //     initMovies();
    // },[]);
    return (
        <div className="App" style={{height:'100vh'}}>
            <>
            <h1>Hello CodeSandbox {page}</h1>
            {loading && <h1>loading</h1>}
            {movies && movies.map(movie => (
                <h2 key={movie.id}>{movie.title}</h2>
            ))}
            </>
        </div>
    );
}

export default App;
