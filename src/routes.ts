import { getTODO, itsWorks } from "@controllers/todo"
import {
  getMovie,
  getMovieId,
  postMovie,
  deleteMoveId,
  upDateMovie,
} from "@controllers/movie"
import {
  deleteLogin,
  getLogin,
  getLoginId,
  postLogin,
  updateLogin,
} from "@controllers/login"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovie)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
  app.put("/movie/:id", upDateMovie)
  app.delete("/movie/:id", deleteMoveId)

  app.get("/login", getLogin)
  app.get("/login/:id", getLoginId)
  app.post("/login", postLogin)
  app.put("/login/:id", updateLogin)
  app.delete("/login/:id", deleteLogin)
}
