import { Link } from 'expo-router';
import { View, Text } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
const HomeScreen = () => {
  const asd = useMovies();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Link asChild href={'/details'}>
        <Text>Go to Details</Text>
      </Link>
    </View>
  );
};
export default HomeScreen;
