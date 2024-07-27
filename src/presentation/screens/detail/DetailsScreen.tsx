import { useLocalSearchParams } from 'expo-router';
import { useMovie } from '../../hooks/useMovie';
import MovieHeader from '../../components/movie/MovieHeader';
import MovieDetail from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';
import FullScreenLoader from '../../components/loader/FullScreenLoader';

const DetailsScreen = () => {
  const { movieId = 0 } = useLocalSearchParams();

  const { isLoading, movie, cast } = useMovie(+movieId);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.title}
        title={movie!.title}
        poster={movie!.poster}
      />
      <MovieDetail movie={movie!} cast={cast} />
    </ScrollView>
  );
};
export default DetailsScreen;
