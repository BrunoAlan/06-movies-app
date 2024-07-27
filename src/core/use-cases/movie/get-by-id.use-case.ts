import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMovie } from '../../../infrastructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/mappers.movie.mapper';
import { FullMovie } from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
    return fullMovie;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
};
