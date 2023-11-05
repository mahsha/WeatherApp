import * as React from 'react';
import { useCallback } from 'react';

import { MainView } from './home-screen.styles';
import { type HomeScreenViewProps } from './home-screen.types';

function HomeScreenView({ isLoading, data, error }: HomeScreenViewProps): JSX.Element {
  const renderState = useCallback(() => {
    if (error != null) {
      return <MainView />;
    }
    if (isLoading) {
      return <MainView />;
    }
    if (data != null) {
      return <MainView />;
    }
    return <MainView />;
  }, [data, error, isLoading]);

  return <MainView>{renderState()}</MainView>;
}

export default HomeScreenView;
