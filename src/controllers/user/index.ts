import { getRepository } from "typeorm"
import { User } from "@models/entity/User"

export const getUser = async (request, response) => {
  try {
    const userRepository = getRepository(User)
    const user = await userRepository.find()
    return response.status(200).json(user)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const getUserId = async (request, response) => {
  try {
    const userRepository = getRepository(User)
    const user = await userRepository.findOne(request.params)
    return response.status(200).json({ user })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postUser = async (request, response) => {
  try {
    const { name, email, password } = request.body
    const repositoryUser = getRepository(User)
    const createUser = repositoryUser.create({ name, email, password })
    const saveUser = await repositoryUser.save(createUser)
    return response
      .status(200)
      .json({ ...saveUser, mensage: "Usuário criado com sucesso!" })
  } catch (error) {
    return response.status(500).json({
      error,
      message: "Não foi possivel efetuar o Usuário, tente novamente.",
    })
  }
}

export const deleteUser = async (request, response) => {
  try {
    const { id } = request.params
    const repositoryUser = getRepository(User)
    const user = await repositoryUser.delete(id)
    return response
      .status(200)
      .json({ ...user, message: "Deletado com sucesso" })
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const updateUser = async (request, response) => {
  try {
    const { id } = request.params
    const { name, email, password } = request.body
    const userRepository = getRepository(User)
    const userId = await userRepository.findOne(id)
    if (email) userId.email = email
    if (email) userId.name = name
    if (password) userId.password = password
    const saveUser = userRepository.save(userId)
    return response
      .status(200)
      .json({ ...saveUser, message: "Alteração feita com sucesso!" })
  } catch (error) {
    return response.status(500).json(error)
  }
}
