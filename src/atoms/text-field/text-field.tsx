import * as React from 'react';

import { Container, ErrorText, StyledInput } from './text-field.styles';
import { type TextFieldProps } from './text-field.types';

function TextField({
  error,
  title,
  onChange,
  keyboardType,
  onBlur,
  testID,
}: TextFieldProps): JSX.Element {
  return (
    <Container>
      <StyledInput
        testID={testID}
        onBlur={onBlur}
        keyboardType={keyboardType ?? 'default'}
        placeholder={title}
        onChangeText={onChange}
      />
      {error !== undefined ? <ErrorText>{error}</ErrorText> : null}
    </Container>
  );
}

export default TextField;
