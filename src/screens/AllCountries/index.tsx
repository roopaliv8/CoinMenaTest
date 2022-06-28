import React, {useCallback, useState} from 'react';
import {View, FlatList, SafeAreaView, Text} from 'react-native';
import {AllCountriesProps} from '../../navigation/routes';
import {CountryListIItem} from '../../components/molecules';
import {CustomTextInput} from '../../components/atoms';
import {CountryType} from '../../stores/types';
import {sortCovidStatsData} from '../../utils/helper';
import {en} from '../../i18n';
import commonStyles from '../../styles';
import styles from './style';

const {container} = commonStyles;
const {subContainer, searchText, sortContainer} = styles;
const {sort_by, deaths, recovered} = en;
interface RenderCountryItemItemProps {
  item: CountryType;
}

const RenderCountryItem = ({item}: RenderCountryItemItemProps) => (
  <CountryListIItem countryData={item} />
);

const AllCountries = ({route}: AllCountriesProps): React.ReactElement => {
  const countriesCovidStatsList = route?.params?.countriesCovidStatsList;

  const [countryStats, setCountryStats] = useState<CountryType[]>([
    ...countriesCovidStatsList,
  ]);

  const onSearchTextChange = (text: string) => {
    let filteredList = countriesCovidStatsList.filter(item =>
      item.Country.includes(text),
    );
    setCountryStats([...filteredList]);
  };

  const sortCovidStatistics = useCallback(
    (sortParam: 'TotalDeaths' | 'TotalRecovered' | 'NewConfirmed') => {
      let sortedItemsList = sortCovidStatsData(
        countriesCovidStatsList,
        sortParam,
      );
      setCountryStats([...sortedItemsList]);
    },
    [countriesCovidStatsList],
  );

  return (
    <View style={container}>
      <SafeAreaView style={subContainer}>
        <CustomTextInput
          onChangeTextValue={onSearchTextChange}
          style={searchText}
          placeholderText="Search"
        />
        <View style={sortContainer}>
          <Text>{sort_by}</Text>
          <Text onPress={() => sortCovidStatistics('NewConfirmed')}>New </Text>
          <Text onPress={() => sortCovidStatistics('TotalDeaths')}>
            {deaths}
          </Text>
          <Text onPress={() => sortCovidStatistics('TotalRecovered')}>
            {recovered}
          </Text>
        </View>
        <FlatList
          data={countryStats}
          keyExtractor={item => `row-${item.ID}`}
          renderItem={RenderCountryItem}
          extraData={countryStats}
        />
      </SafeAreaView>
    </View>
  );
};

export default AllCountries;
