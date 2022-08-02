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
  try {
    const { id } = request.params
    const repositoryMovie = getRepository(Movie)
    const movie = await repositoryMovie.findOne(id)
    return response.json({ movie })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postMovie = async (request, response) => {
  try {
    const {
      title,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      resume,
      note,
    } = request.body
    const useRepository = getRepository(Movie)
    const movies = useRepository.create({
      title,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      resume,
      note,
    })
    const saveMovie = await useRepository.save(movies)
    return response.status(200).json(saveMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
