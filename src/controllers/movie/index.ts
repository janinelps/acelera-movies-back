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
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      actors,
      resume,
      awards,
      note,
    } = request.body
    const useRepository = getRepository(Movie)
    const movies = useRepository.create({
      title,
      gender,
      classification,
      subtitle,
      image,
      releaseDate,
      director,
      writer,
      studio,
      actors,
      resume,
      awards,
      note,
    })
    const saveMovie = await useRepository.save(movies)
    return response.status(200).json(saveMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const deleteMoveId = async (request, response) => {
  try {
    const { id } = request.params
    const repositoryMovie = getRepository(Movie)
    const deleteMovie = await repositoryMovie.delete(id)
    return response
      .status(200)
      .json({ ...deleteMovie, message: "Deletado com sucesso!" })
  } catch (error) {
    response.status(500).json(error)
  }
}

export const upDateMovie = async (request, response) => {
  try {
    const { id } = request.params
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

    const respositoryMovie = getRepository(Movie)
    const movie = await respositoryMovie.findOne(id)
    if (title) movie.title = title
    if (classification) movie.classification = classification
    if (subtitle) movie.subtitle = subtitle
    if (image) movie.image = image
    if (releaseDate) movie.releaseDate = releaseDate
    if (director) movie.releaseDate = releaseDate
    if (writer) movie.releaseDate = releaseDate
    if (studio) movie.releaseDate = releaseDate
    if (resume) movie.resume = resume
    if (note) movie.note = note

    const saveMovie = respositoryMovie.save(movie)
    return response
      .status(200)
      .json({ ...saveMovie, message: "Alterado com Sucesso" })
  } catch (error) {
    return response
      .status(500)
      .json({ error, message: "Não foi possivel Alterar." })
  }
}
