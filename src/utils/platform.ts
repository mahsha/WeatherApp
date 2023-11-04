import { type ComponentType } from 'react';
import { Dimensions, Platform as RNPlatform } from 'react-native';

import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

export const IS_DEV_ENV = __DEV__;

export enum PlatformType {
  Ios = 'ios',
  Android = 'android',
  Web = 'web',
  Windows = 'windows',
  Macos = 'macos',
}

export const isIOS = RNPlatform.OS === PlatformType.Ios;
export const isAndroid = RNPlatform.OS === PlatformType.Android;
export const type = RNPlatform.OS;
export const version = RNPlatform.Version;

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const isSmallDevice = Dimensions.get('screen').height <= 600;

// The dimensions of the provided designs screen
const DESIGN_SCREEN_WIDTH = 375;
const DESIGN_SCREEN_HEIGHT = 812;

// Calculate the adaptive width given the design screen width dimension.
// To be used for style props like: width, marginHorizontal, fontSize, ...
// eslint-disable-next-line max-len
export const wp = (designWidth: number): number => widthPercentageToDP((designWidth * 100) / DESIGN_SCREEN_WIDTH);

// Calculate the adaptive height given the design screen height dimension.
// To be used for style props like: height, marginVertical, ...
export const hp = (designHeight: number): number => heightPercentageToDP(`${(designHeight * 100) / DESIGN_SCREEN_HEIGHT}%`);

export type ExtractProps<TComponentOrTProps> = TComponentOrTProps extends ComponentType<
infer TProps
>
  ? TProps
  : TComponentOrTProps;
