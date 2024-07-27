import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases/movies/now-playing.use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [nowPlating, setnowPlating] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies =
      await UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    console.log(nowPlayingMovies);
  };

  return {
    movies: [],
    loading: false,
    error: null,
  };
};
