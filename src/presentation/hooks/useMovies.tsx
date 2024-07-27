import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularMovies = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedMovies = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingMovies = UseCases.moviesUpcomingUseCase(movieDBFetcher);
    const [nowPlaying, popular, topRated, upcoming] = await Promise.all([
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upcomingMovies,
    ]);

    setNowPlaying(nowPlaying);
    setPopular(popular);
    setTopRated(topRated);
    setUpcoming(upcoming);
    setIsLoading(false);
  };

  return {
    nowPlaying,
    popular,
    topRated,
    upcoming,
    isLoading,
    error: null,
  };
};
