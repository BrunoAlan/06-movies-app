import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: process.env.EXPO_PUBLIC_THE_MOVIE_DB_KEY!,
    language: 'en',
  },
});
