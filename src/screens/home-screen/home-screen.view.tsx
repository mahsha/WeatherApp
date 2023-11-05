import * as React from 'react';
import { useCallback } from 'react';

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import { ActivityIndicator, FormInput, KeyboardAvoidingView } from '@src/atoms';
import { R } from '@src/res';

import {
  Container,
  ErrorText,
  MainView,
  SearchButtonText,
  StyledButton,
} from './home-screen.styles';
import { type FormValues, type HomeScreenViewProps } from './home-screen.types';

function HomeScreenView({
  isLoading,
  data,
  error,
  onChangeSearchParams,
}: HomeScreenViewProps): JSX.Element {
  const FIELDS = {
    city: 'city',
  };

  const formMethods = useForm<FormValues>({
    mode: 'all',
    reValidateMode: 'onChange',
  });

  const { handleSubmit } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = useCallback(
    ({ city }) => {
      onChangeSearchParams({ city });
    },
    [onChangeSearchParams],
  );

  const renderState = useCallback(() => {
    if (error != null) {
      return <MainView />;
    }
    if (isLoading) {
      return <ActivityIndicator />;
    }
    if (data != null) {
      return <ErrorText>{R.string.homeScreen.apiError}</ErrorText>;
    }
    return null;
  }, [data, error, isLoading]);

  const renderTextFields = useCallback(
    () => (
      <Container>
        <FormProvider {...formMethods}>
          <FormInput rules={{ required: 'Please Enter a city' }} name={FIELDS.city} />
        </FormProvider>
        <StyledButton
          onPress={(event) => {
            void handleSubmit(onSubmit)(event);
          }}
        >
          <SearchButtonText>{R.string.homeScreen.search}</SearchButtonText>
        </StyledButton>
      </Container>
    ),
    [FIELDS.city, formMethods, handleSubmit, onSubmit],
  );

  return (
    <MainView>
      <KeyboardAvoidingView>
        {renderState()}
        {renderTextFields()}
      </KeyboardAvoidingView>
    </MainView>
  );
}

export default HomeScreenView;
