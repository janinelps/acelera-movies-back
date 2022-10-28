import { User } from "@models/entity/User"
import { getRepository } from "typeorm"
import md5 from "md5"

const jwt = require("jsonwebtoken")

export const generateAccessToken = async (request, response) => {
  const { SECRET } = process.env

  console.log(process.env.SECRET)

  const emailUser = request.body.email
  const passwordUser = request.body.password

  const user = await getRepository(User).findOne({
    where: { email: emailUser },
  })

  if (!user || user.password !== md5(passwordUser)) {
    return response.status(401).json({ message: "Não autorizado." })
  }

  const payload = {
    name: user.name,
    email: user.email,
    id: user.id,
  }

  const acessToken = jwt.sign(payload, SECRET)

  return response.status(200).json({
    acessToken,
    user: user.name,
  })
}
