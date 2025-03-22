import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappter";
import { moviesApi } from "@/core/api/movie-api";

export const topRatedMoviesAction = async () => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>("/top_rated");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now top_rated movies";
  }
};
