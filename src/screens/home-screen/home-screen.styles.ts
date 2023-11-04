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
    background-color: ${R.color.colors.blue};
    align-items: 'center';
    justify-content: 'center';
`;
