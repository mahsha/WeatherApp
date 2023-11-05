import { TextInput } from 'react-native';

import styled from 'styled-components/native';

import { R } from '@src/res';

export const ErrorText = styled.Text`
  font-size: ${R.fontSize.xxSmall}px;
  color: ${R.color.colors.red};
`;

export const StyledInput = styled(TextInput)`
  padding: ${R.spacing.medium}px;
  width: 100%;
`;

export const Container = styled.View`
  background-color: ${R.color.colors.white};
  width: 100%;
  padding: ${R.spacing.xSmall}px;
`;
