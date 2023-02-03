import React, { useEffect, useState } from "react";
import Cards from "../Card/Card";
import "./movieList.css"
import { useParams } from "react-router-dom"
import { from, fromEvent, Subject } from "rxjs";
import { switchMap, debounceTime } from "rxjs/operators";

const MovieList = () => {

    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();
    const searchSubject = new Subject();

    useEffect(() => {
        searchSubject.pipe(
            debounceTime(500),
            switchMap(() =>
                from(
                    fetch(
                        `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
                    )
                ).pipe(switchMap(res => from(res.json())))
            )
        ).subscribe(data => setMovieList(data.results));

        searchSubject.next();
    }, [type]);

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}


export default MovieList

