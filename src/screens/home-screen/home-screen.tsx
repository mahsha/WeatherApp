// import * as React from 'react';
// import { Text, View } from 'react-native';

// import { FlatList } from 'react-native-gesture-handler';

// import { type ForecastResult } from '@src/models';
// import { useWeatherForecastQuery } from '@src/queries';

// import { MainView, Screen } from './home-screen.styles';
// import HomeScreenView from './home-screen.view';

// function HomeScreen(): JSX.Element {
//   const {
//     data, isLoading, isFetching, error,
//   } = useWeatherForecastQuery<ForecastResult>({
//     country: 'Cairo',
//   });

//   if (isLoading) {
//     return (
//       <Screen>
//         <MainView style={{ backgroundColor: 'yellow' }} />
//       </Screen>
//     );
//   }
//   if (error != null) {
//     return (
//       <Screen>
//         <MainView style={{ backgroundColor: 'red' }} />
//       </Screen>
//     );
//   }
//   if (data == null) {
//     return (
//       <Screen>
//         <MainView style={{ backgroundColor: 'orange' }} />
//       </Screen>
//     );
//   }

//   return (
//     <Screen>
//       <Text>{data.location.country}</Text>
//       <Text>{data.location.country}</Text>
//       <Text>{data.current.condition.text}</Text>
//       <Text>{data.current.temp_c}</Text>
//       <FlatList
//         data={data.forecast.forecastday}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.date}</Text>
//             <Text>{item.day.avgtemp_c}</Text>
//           </View>
//         )}
//       />
//     </Screen>
//   );
// }

// export default HomeScreen;
