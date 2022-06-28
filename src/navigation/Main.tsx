import React from 'react';
import {MainStack, MainRoutes} from './routes';
import {en} from '../i18n';
import HomeScreen from '../screens/Home';
import AllCountries from '../screens/AllCountries';

const Main = (): React.ReactElement => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={MainRoutes.Home}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen
        name={MainRoutes.AppCountries}
        component={AllCountries}
        options={{
          title: en.all_country_cases,
        }}
      />
    </MainStack.Navigator>
  );
};
export default Main;
