import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBResponse } from '../../../infraestructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infraestructure/mappers.movie.mapper';
import type { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBResponse>('/popular', {
      params: {
        page: options?.page || 1,
      },
    });
    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
};
