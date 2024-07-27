import { StyleSheet, Text, View } from 'react-native';
import type { FullMovie } from '../../../core/entities/movie.entity';
import { Formatter } from '../../../config/helpers/formater';
interface Props {
  movie: FullMovie;
}
const MovieDetail = ({ movie }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>{movie.rating}</Text>
          <Text style={{ marginLeft: 5 }}>- {movie.genres.join(', ')}</Text>
        </View>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>
        <Text style={{ fontSize: 16 }}>{movie.description}</Text>
        <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 16 }}>{Formatter.currency(movie.budget)}</Text>
      </View>

      <View style={{ marginTop: 10, marginBottom: 100 }}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}
        >
          Casting
        </Text>
      </View>
    </>
  );
};
export default MovieDetail;
const styles = StyleSheet.create({});
