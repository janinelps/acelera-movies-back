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
