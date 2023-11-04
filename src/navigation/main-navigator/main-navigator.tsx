import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '@src/screens';

import { type IMainParamList } from './main-navigator.types';
import AppRoute from '../routes';

const MainStack = createStackNavigator<IMainParamList>();
function MainStackNavigator(): JSX.Element {
  return (
    <MainStack.Navigator initialRouteName={AppRoute.HomeScreen}>
      <MainStack.Group>
        <MainStack.Screen
          name={AppRoute.HomeScreen}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Group>
    </MainStack.Navigator>
  );
}

export default MainStackNavigator;
