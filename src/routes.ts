import { getTODO, itsWorks } from "@controllers/todo"
import { getMovie, getMovieId, postMovie } from "@controllers/movie"
import { getLogin, postLogin } from "@controllers/login"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovie)
  app.get("/login", getLogin)
  app.get("/movie/:id", getMovieId)
  app.post("/movie", postMovie)
  app.post("/login", postLogin)
}
