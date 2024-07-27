import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { useRouter } from 'expo-router';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}
const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {
  const router = useRouter();
  return (
    <Pressable
      style={({ pressed }) => ({
        width,
        height,
        marginHorizontal: 10,
        paddingBottom: 20,
        paddingHorizontal: 10,
        opacity: pressed ? 0.9 : 1,
      })}
      onPress={() =>
        router.push({ pathname: '/details', params: { movieId: movie.id } })
      }
    >
      <View style={{ ...styles.imageContainer, width: 300, height: 400 }}>
        <Image style={styles.image} source={{ uri: movie.poster }} />
      </View>
    </Pressable>
  );
};
export default MoviePoster;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
