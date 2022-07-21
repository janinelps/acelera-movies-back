import { getRepository } from "typeorm"
import { Login } from "@models/entity/Login"

export const getLogin = async (request, response) => {
  try {
    const loginRepository = getRepository(Login)
    let user = await loginRepository.find()
    return response.status(200).json(user)
  } catch (error) {
    return response.status(500).json(error)
  }
}
