import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const DetailsScreen = () => {
  const navigation = useNavigation();

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
