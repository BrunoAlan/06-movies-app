import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'f6d0014f7b45b2349ea2401483d7ddd0',
    language: 'en',
  },
});
