import { getRepository } from "typeorm"
import { Movie } from "@models/entity/Movie"

export const getMovie = async (request, response) => {
  try {
    const movieRepository = getRepository(Movie)
    const movie = await movieRepository.find()
    return response.status(200).json(movie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getMovieId = async (request, response) => {
  const { id } = request.params
  const repositoryMovie = getRepository(Movie)
  const movie = await repositoryMovie.findOne(id)
  return response.json({ movie })
}
