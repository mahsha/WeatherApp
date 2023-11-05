import * as React from 'react';
import { useCallback } from 'react';

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';

import { ActivityIndicator, FormInput, KeyboardAvoidingView } from '@src/atoms';
import { R } from '@src/res';

import {
  Container,
  ErrorText,
  IconImage,
  MainView,
  ParamsText,
  Row,
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

  const renderValues = (title: string, value: string): JSX.Element => (
    <Row>
      <ParamsText>{title}</ParamsText>
      <ParamsText>{value}</ParamsText>
    </Row>
  );

  const renderMainContainer = useCallback(() => {
    if (data == null) {
      return null;
    }
    return (
      <Container>
        {renderValues(R.string.homeScreen.country, data.location.country)}
        {renderValues(R.string.homeScreen.city, data.location.name)}
        {renderValues(R.string.homeScreen.weatherCondition, data.current.condition.text)}
        <IconImage
          source={{
            uri: `https:${data.current.condition.icon}`,
          }}
        />
        {parseForecastDay(data.forecast.forecastday).map((value) => (
          <Row key={value.time}>
            <ParamsText>{value.time}</ParamsText>
            <ParamsText>{value.temp_c}</ParamsText>
            <ParamsText>{value.condition}</ParamsText>
          </Row>
        ))}
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
      <KeyboardAvoidingView>
        <Container>{renderState()}</Container>
        <Container>{renderTextFields()}</Container>
      </KeyboardAvoidingView>
    </MainView>
  );
}

export default HomeScreenView;
