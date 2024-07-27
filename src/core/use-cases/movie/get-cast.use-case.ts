import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBCastResponse } from '../../../infrastructure/interfaces/movies-db.responses';
import { CastMapper } from '../../../infrastructure/mappers/cast.mappers';
import { Cast } from '../../entities/cast.entity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number
): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`
    );

    const actors = cast.map(CastMapper.fromMovieDBCastToEntity);

    return actors;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error(`Cannot get movie cast ${movieId}`);
  }
};
