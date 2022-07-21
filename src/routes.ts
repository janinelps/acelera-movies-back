import {
  getLogin,
  getMovie,
  getMovieId,
  getTODO,
  itsWorks,
} from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/", itsWorks)
  app.get("/todo", getTODO)
  app.get("/movie", getMovie)
  app.get("/login", getLogin)
  app.get("/movie/:id", getMovieId)
}
