import { moviesApi } from "@/core/api/movie-api";
import { CompleteMovie } from "@/infrastructure/interfaces/movie-interface";
import { MovieDBMovieResponse } from "@/infrastructure/interfaces/moviedb-movie.response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappter";

export const getMovieByIdAction = async (
  id: number | string
): Promise<CompleteMovie> => {
  try {
    const { data } = await moviesApi.get<MovieDBMovieResponse>(`${id}`);

    console.log("pelicula HTTP cargada");
    return MovieMapper.fromTheMovieDBToCompleteMovie(data);
  } catch (error) {
    console.log(error);
    throw "Cannot load now popular movies";
  }
};
