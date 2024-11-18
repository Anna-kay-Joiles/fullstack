// url: http://localhost:3000/api/movies
import client from "../../libs/prismadb"
import { NextResponse } from "next/server"

export const Movie = async (req) => {
    try {
        // parse the request body to JSON format
        const body = await req.json()
        // Extract title ,list of actors and release year from the request body
        const { title, list_of_actors,release_year } = body
        
        // use Prisma client to create a new movie with the title ,list of actors and release year
        const newMovie = await client.movie.create({
            data: {
                title,
                list_of_actors,
                release_year
            }
        })
        // return the new Movie in JSON format
        return NextResponse.json(newMovie)
    } catch (error) {
        return NextResponse.error({
            status: 500
        }, {message: error.message})
    }
}

export const GET = async () => {

    try {
        const movies = await client.movie.findMany()
        return NextResponse.json(movies)
        
    } catch (error) {
        return NextResponse.json({status: 500}, {message: error.message})
    }
}
