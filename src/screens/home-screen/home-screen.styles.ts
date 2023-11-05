import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import { R } from '@src/res';
import { hp } from '@src/utils';

export const Screen = styled(SafeAreaView).attrs({
  edges: ['top', 'bottom'],
})`
  flex: 1;
  margin-top: ${hp(R.spacing.xMedium)}px;
`;

export const MainView = styled.View`
  flex: 1;
  padding: ${R.spacing.xSmall}px;
`;

export const Container = styled.View``;
export const Row = styled.View`
  flex-direction: row;
`;

export const StyledButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${R.color.colors.blue};
  height: ${hp(R.spacing.massive)}px;
  margin-top: ${hp(R.spacing.xMedium)}px;
  border-radius: ${hp(R.spacing.xMedium)}px;
`;

export const SearchButtonText = styled.Text`
  font-size: ${R.fontSize.medium}px;
  color: ${R.color.colors.white};
`;

export const ErrorText = styled.Text`
  font-size: ${R.fontSize.medium}px;
  color: ${R.color.colors.red};
  text-align: center;
  width: 100%;
  padding: ${R.spacing.xSmall}px;
`;

export const ParamsText = styled.Text`
  flex: 0.5;
  font-size: ${R.fontSize.medium}px;
  color: ${R.color.colors.black};
  padding: ${R.spacing.xSmall}px;
`;

export const IconImage = styled.Image`
  height: ${hp(R.spacing.massive)}px;
  width: ${hp(R.spacing.massive)}px;
`;
