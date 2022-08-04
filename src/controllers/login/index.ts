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

export const getLoginId = async (request, response) => {
  try {
    const loginRepository = getRepository(Login)
    let login = await loginRepository.findOne(request.params)
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

export const deleteLogin = async (request, response) => {
  try {
    const { id } = request.params
    const repositorylogin = getRepository(Login)
    const login = await repositorylogin.delete(id)
    return response
      .status(200)
      .json({ ...login, message: "Deletado com sucesso" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const updateLogin = async (request, response) => {
  try {
    const { id } = request.params
    const { email, password } = request.body
    const loginRepository = getRepository(Login)
    const loginId = await loginRepository.findOne(id)
    if (email) loginId.email = email
    if (password) loginId.password = password
    const saveLogin = loginRepository.save(loginId)
    return response
      .status(200)
      .json({ ...saveLogin, message: "Alteração feita com sucesso!" })
  } catch (error) {
    return response.status(500).json(error)
  }
}
