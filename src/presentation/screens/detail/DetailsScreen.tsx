import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const { movieId } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({ title: 'Details' });
  }, []);

  return (
    <View>
      <Text>DetailsScreen</Text>
    </View>
  );
};
export default DetailsScreen;
