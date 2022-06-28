import {createStackNavigator} from '@react-navigation/stack';
import {CountryType} from '../stores/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum MainRoutes {
  AppCountries = 'AppCountries',
  Home = 'Home',
}

export type MainStackParamList = {
  [MainRoutes.AppCountries]: {countriesCovidStatsList: CountryType[]};
  [MainRoutes.Home]: undefined;
};
export type AllCountriesProps = NativeStackScreenProps<
  MainStackParamList,
  MainRoutes.AppCountries
>;

export const MainStack = createStackNavigator<MainStackParamList>();
