import { type RouteProp } from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';

import type AppRoute from './routes';

export type IMainParamList = {
  [AppRoute.HomeScreen]: undefined;
};

type IMainRoute = keyof IMainParamList;

export type IMainNavigationProp<R extends IMainRoute> = NativeStackScreenProps<IMainParamList, R>;
export type IMainRoutProp<R extends IMainRoute> = RouteProp<IMainParamList, R>;
