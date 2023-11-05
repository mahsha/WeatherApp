import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';

import { type ExtractProps, isIOS } from '@src/utils';

import { KeyboardAvoiding, Root } from './keyboard-aware-view.styles';

function KeyboardAvoidingView({
  children,
  ...props
}: ExtractProps<typeof KeyboardAvoiding>): JSX.Element {
  return (
    <KeyboardAvoiding behavior={isIOS ? 'padding' : undefined} {...props}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <Root>{children}</Root>
      </TouchableWithoutFeedback>
    </KeyboardAvoiding>
  );
}

export default KeyboardAvoidingView;
