import * as React from 'react';
import { useCallback } from 'react';
import { ScrollView } from 'react-native';

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import { ActivityIndicator, FormInput, KeyboardAvoidingView } from '@src/atoms';
import { R } from '@src/res';

import { ForecastCard } from './components';
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
  parseForecastDay,
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

  const renderMainContainer = useCallback(() => {
    if (data == null) {
      return null;
    }
    return (
      <Container>
        <ForecastCard
          hourlyData={parseForecastDay(data.forecast.forecastday)}
          condition={data.current.condition.text}
          country={data.location.country}
          city={data.location.name}
          icon={data.current.condition.icon}
        />
      </Container>
    );
  }, [data, parseForecastDay]);

  const renderState = useCallback(() => {
    if (error != null) {
      return <ErrorText>{R.string.homeScreen.apiError}</ErrorText>;
    }
    if (isLoading) {
      return <ActivityIndicator />;
    }
    return renderMainContainer();
  }, [error, isLoading, renderMainContainer]);

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
      <ScrollView>
        <KeyboardAvoidingView>
          <Container>{renderState()}</Container>
          <Container>{renderTextFields()}</Container>
        </KeyboardAvoidingView>
      </ScrollView>
    </MainView>
  );
}

export default HomeScreenView;
