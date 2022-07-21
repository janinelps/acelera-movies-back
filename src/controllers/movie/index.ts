import { getRepository } from "typeorm"
import { Movie } from "@models/entity/Movie"

export const getMovie = (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const movie = movieRepository.find()
    return response.status(200).json(movie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMovieId = (request, response) => {
  const id = request.params.id
  const repositoryMovie = getRepository(Movie)
  const movie = repositoryMovie.findOne(id)
  return response.json({ movie })
}
