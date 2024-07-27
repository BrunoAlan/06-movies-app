import { StyleSheet, Text, View } from 'react-native';
import type { Movie } from '../../../core/entities/movie.entity';
import { FlatList } from 'react-native-gesture-handler';
import MoviePoster from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
}
const HorizontalCarousel = ({ movies, title }: Props) => {
  return (
    <View style={{ height: title ? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginVertical: 10,
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        // contentContainerStyle={{ paddingLeft: 10 }}
      />
    </View>
  );
};
export default HorizontalCarousel;
const styles = StyleSheet.create({});
