import React from 'react';

import {
  type FieldValues,
  useController,
  type UseControllerProps,
  useFormContext,
} from 'react-hook-form';

import { type InputFormProps } from './form-input.props';
import { TextField } from '../text-field';

function FormInput({
  name,
  rules,
  defaultValue,
  keyboardType,
  testID,
}: UseControllerProps<FieldValues, string> & InputFormProps): JSX.Element {
  const formContext = useFormContext();
  const {
    control,
    formState: { errors },
  } = formContext;
  const { field } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const error: string | undefined = errors[name]?.message as string;

  return (
    <TextField
      testID={testID}
      error={error}
      onChange={field.onChange}
      onBlur={field.onBlur}
      title={name}
      keyboardType={keyboardType}
    />
  );
}
export default FormInput;
