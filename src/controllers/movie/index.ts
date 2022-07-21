import { getRepository } from "typeorm"
import { ToDo } from "@models/entity/ToDo"

export const getMovie = (request, response) => {
  try {
    const movieRepository = getRepository(ToDo)
    const movie = movieRepository.find()
    return response.status(200).json(movie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
