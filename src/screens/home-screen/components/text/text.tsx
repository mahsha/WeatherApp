import * as React from 'react';

import { ParamsText } from './text.styles';
import type TextProps from './text.types';

function Text({ value }: TextProps): JSX.Element {
  return <ParamsText>{value}</ParamsText>;
}

export default Text;
