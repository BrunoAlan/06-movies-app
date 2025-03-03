import { View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PosterCarousel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';
import FullScreenLoader from '../../components/loader/FullScreenLoader';
const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
  } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return (
    <ScrollView>
      <View style={{ paddingTop: top + 20, paddingBottom: 30 }}>
        <PosterCarousel movies={nowPlaying} />
        <HorizontalCarousel
          movies={popular}
          title='Popular Movies'
          loadNextPage={popularNextPage}
        />
        <HorizontalCarousel movies={topRated} title='Top Rated Movies' />
        <HorizontalCarousel movies={upcoming} title='Upcoming Movies' />
      </View>
    </ScrollView>
  );
};
export default HomeScreen;
