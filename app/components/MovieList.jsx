import React from "react";
import Movie from "./Movie";

const MovieList =({movie}) =>
{
    return(
        <ul className="p-6">
            {movie.map(movie =>(
                <Movie key={movie.id} movie ={movie} />
            ))}

        </ul>
    )
}
export default MovieList