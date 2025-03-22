import { MovieDBMoviesResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movies.mappter";
import { moviesApi } from "@/core/api/movie-api";

export const nowPlayingAction = async () => {
  try {
    const { data } = await moviesApi.get<MovieDBMoviesResponse>("/now_playing");

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load now plaginy movies";
  }
};
