import styled from 'styled-components/native';

import { R } from '@src/res';
import { hp } from '@src/utils';

export const Row = styled.View`
  flex-direction: row;
`;
export const IconImage = styled.Image`
  height: ${hp(R.spacing.massive)}px;
  width: ${hp(R.spacing.massive)}px;
`;
