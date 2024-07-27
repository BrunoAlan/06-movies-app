import { Image, Text, StyleSheet, View } from 'react-native';
import type { Cast } from '../../../core/entities/cast.entity';

interface Props {
  cast: Cast;
}

const CastActor = ({ cast }: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: cast.avatar }}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      ></Image>
      <View style={styles.castInfo}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{cast.name}</Text>
        <Text style={{ fontSize: 12, opacity: 0.7 }}>{cast.character}</Text>
      </View>
    </View>
  );
};
export default CastActor;
const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'column',
    width: 100,
  },
  castInfo: {
    marginLeft: 10,
    marginRight: 4,
  },
});
