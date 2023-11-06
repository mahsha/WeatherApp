import * as React from 'react';
import { View } from 'react-native';

import { R } from '@src/res';
import { ForecastRow } from '@src/screens/home-screen/components/forecast-row';
import { TextRow } from '@src/screens/home-screen/components/text-row';

import { IconImage } from './forecast-card.styles';
import type ForecastCardProps from './forecast-card.types';

function ForecastCard({
  icon,
  country,
  city,
  condition,
  hourlyData,
}: ForecastCardProps): JSX.Element {
  return (
    <View>
      <TextRow value={country} title={R.string.homeScreen.country} />
      <TextRow title={R.string.homeScreen.city} value={city} />
      <TextRow title={R.string.homeScreen.weatherCondition} value={condition} />
      <IconImage
        source={{
          uri: `https:${icon}`,
        }}
      />
      {hourlyData.map((value) => (
        <ForecastRow
          key={value.time}
          time={value.time}
          temp={value.temp_c}
          condition={value.condition}
        />
      ))}
    </View>
  );
}

export default ForecastCard;
