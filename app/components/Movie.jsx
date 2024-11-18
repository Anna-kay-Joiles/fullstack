import React from "react";

const Movie =({movie}) => {
    return (
        <li className=' p-3 my-5 bg-slate-300' key={post.id}>
        <h1 className='font-bold'>
            {movie.title}
        </h1>

        <p> 
            {movie.list_of_actors}
        </p>

        <p>
            {movie.release_year}
        </p>
    </li>

    )
}

export default Movie
