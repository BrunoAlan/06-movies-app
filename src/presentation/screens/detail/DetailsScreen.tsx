import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useMovie } from '../../hooks/useMovie';
import MovieHeader from '../../components/movie/MovieHeader';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import MovieDetail from '../../components/movie/MovieDetail';
import { ScrollView } from 'react-native-gesture-handler';

const DetailsScreen = () => {
  const { movieId = 0 } = useLocalSearchParams();
  const insets = useSafeAreaInsets();

  const { isLoading, movie } = useMovie(+movieId);

  if (isLoading) {
    return (
      <View>
        <SafeAreaView />
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.title}
        title={movie!.title}
        poster={movie!.poster}
      />
      <MovieDetail movie={movie!} />
    </ScrollView>
  );
};
export default DetailsScreen;
