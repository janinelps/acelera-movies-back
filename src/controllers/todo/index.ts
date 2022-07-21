import { getRepository } from "typeorm"
import { ToDo } from "@models/entity/ToDo"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovie = (request, response) => {
  const movieRepository = getRepository(ToDo)
  const movie = movieRepository.find()
  return response.json(movie)
}

export const getLogin = (request, response) => {
  const repositoryLogin = getRepository(ToDo)
  const login = repositoryLogin.findOne()
  return response.json(login)
}

export const getMovieId = (request, response) => {
  const id = request.params.id
  const repositoryMovie = getRepository(ToDo)
  const movie = repositoryMovie.findOne(id)
  return response.json({ movie })
}
