import React from "react"
import MovieList from "../components/MovieList";
import AddMovie from "../components/AddMovie";

//A componet that when clicked will open a modal to add a post to my page
// A component to retrive all the post from the database 

  async function getData ()  {
     const res = await fetch ("http://localhost:3000/api/movies" , {cache:"no-store"});
     if(!res.ok){
      throw new Error("Failed to fetch data");
  }
  return res.json();
}
const page = async () => {
  const movies = await getData ()
  console.log(movies)
  return (
    <main className='flex  flex-col justify-between p-24'> 
    
    <h1 className=" p-5">
        My Posts App
    </h1>

    <div>
        <AddMovie/>

       <MovieList movie ={movies}/>
    </div>

    </main>
  )
}

export default page