import { useEffect, useState } from 'react';

export const useMovies = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    // Fetch movie
    setIsLoading(false);
  };

  return {
    isLoading,
    loadMovie,
  };
};
