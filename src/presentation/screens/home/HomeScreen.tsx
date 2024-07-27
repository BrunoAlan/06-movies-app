import { Link } from 'expo-router';
import { View, Text } from 'react-native';
const HomeScreen = () => {
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
