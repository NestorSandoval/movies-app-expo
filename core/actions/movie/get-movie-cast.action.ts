import { moviesApi } from "@/core/api/movie-api";
import { MovieDBCreditsReponse } from "@/infrastructure/interfaces/moviedb-credits.response";
import { CastMapper } from "@/infrastructure/mappers/movie-cast.mapper";

export const getMovieCastAction = async (movieId: number | string) => {
  try {
    const { data } = await moviesApi.get<MovieDBCreditsReponse>(
      `/${movieId}/credits`
    );

    console.log("pelicula HTTP cargada");
    return data.cast.map(CastMapper.fromMovieDBCastToEntity);
  } catch (error) {
    console.log(error);
    throw "Cannot load now popular movies";
  }
};
