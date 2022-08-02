import { getRepository } from "typeorm"
import { Login } from "@models/entity/Login"

export const getLogin = async (request, response) => {
  try {
    const loginRepository = getRepository(Login)
    let login = await loginRepository.find()
    return response.status(200).json(login)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postLogin = async (request, response) => {
  try {
    const { email, password } = request.body
    const repositoryLogin = getRepository(Login)
    const createLogin = repositoryLogin.create({ email, password })
    const saveLogin = await repositoryLogin.save(createLogin)
    return response.status(200).json(saveLogin)
  } catch (error) {
    return response.status(500).json(error)
  }
}
