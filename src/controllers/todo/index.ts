import { ToDo } from "@models/entity/ToDo"
import { getRepository } from "typeorm"

export const itsWorks = (request, response) => {
  return response.json({ message: "It's Works!!" })
}

export const getTODO = (request, response) => {
  return response.json({ todos: [] })
}

export const getMovie = (request, response) => {
  return response.json({ movie: [] })
}

export const getLogin = (request, response) => {
  return response.json({ movie: [] })
}

export const getMovieId = (request, response) => {
  const id = request.params.id
  const repositoryMovie = getRepository(ToDo)
  const movie = repositoryMovie.findOne(id)
  return response.json({ movie })
}
