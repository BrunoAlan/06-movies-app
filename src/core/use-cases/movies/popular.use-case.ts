import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBResponse } from '../../../infraestructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infraestructure/mappers.movie.mapper';

// import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<MovieDBResponse>('/popular');
    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - Popular');
  }
};
