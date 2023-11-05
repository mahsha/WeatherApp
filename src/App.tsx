import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { MainStackNavigator } from '@src/navigation';

import 'react-native-gesture-handler';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
