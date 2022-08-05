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
    const { login, password } = request.body
    // const repositoryLogin = getRepository(Login)
    // const createLogin = repositoryLogin.create({ email, password })
    // const saveLogin = await repositoryLogin.save(createLogin)
    // return response.status(200).json(saveLogin)
    if (login === "teste" && password === "1234")
      return response
        .status(200)
        .json({ message: "Login efetuado com sucesso!" })
  } catch (error) {
    return response.status(500).json({
      error,
      message: "Não foi possivel efetuar o login, tente novamente.",
    })
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
    const { login, password } = request.body
    const loginRepository = getRepository(Login)
    const loginId = await loginRepository.findOne(id)
    if (login) loginId.login = login
    if (password) loginId.password = password
    const saveLogin = loginRepository.save(loginId)
    return response
      .status(200)
      .json({ ...saveLogin, message: "Alteração feita com sucesso!" })
  } catch (error) {
    return response.status(500).json(error)
  }
}
