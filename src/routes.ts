import { generateAccessToken } from "@controllers/auth"
import {
  getMovie,
  getMovieId,
  postMovie,
  deleteMoveId,
  upDateMovie,
} from "@controllers/movie"
import {
  deleteUser,
  getUser,
  getUserId,
  postUser,
  updateUser,
} from "@controllers/user"

export const defineRoutes = (app) => {
  app.get("/")

  app.post("/login", generateAccessToken)
  app.get("/movie", getMovie)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
  app.put("/movie/:id", upDateMovie)
  app.delete("/movie/:id", deleteMoveId)

  app.get("/user", getUser)
  app.get("/user/:id", getUserId)
  app.post("/user", postUser)
  app.put("/user/:id", updateUser)
  app.delete("/user/:id", deleteUser)
}
