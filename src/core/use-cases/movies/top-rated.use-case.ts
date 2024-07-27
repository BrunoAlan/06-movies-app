import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBResponse } from '../../../infraestructure/interfaces/movies-db.responses';
import { MovieMapper } from '../../../infraestructure/mappers.movie.mapper';

import type { Movie } from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<MovieDBResponse>('/top_rated');
    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching movies - topRated');
  }
};
