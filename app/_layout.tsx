import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLaout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='details'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
