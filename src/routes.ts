import { getTODO, itsWorks } from "@controllers/todo"
import { getMovie, getMovieId } from "@controllers/movie"
import { getLogin } from "@controllers/login"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovie)
  app.get("/login", getLogin)
  app.get("/movie/:id", getMovieId)
}
