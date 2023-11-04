import * as React from 'react';

import { Screen } from './home-screen.styles';
import HomeScreenView from './home-screen.view';

function HomeScreen(): JSX.Element {
  return (
    <Screen>
      <HomeScreenView />
    </Screen>
  );
}

export default HomeScreen;
