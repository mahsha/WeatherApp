import {
  type KeyboardTypeOptions,
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
} from 'react-native';

export interface TextFieldProps {
  title: string;
  error?: string;
  onChange: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  testID: string;
}
