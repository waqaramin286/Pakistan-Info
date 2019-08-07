import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/ScreensStyle';

class PresidentsScreen extends Component {

  static navigationOptions = {
    title: 'Presidents',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
      color: '#212121',
    },
    headerStyle: {
      backgroundColor: '#00cc6a',
    },
  };

  constructor(props) {
    super(props);
  }
  render() {
    const PresidentsList = [
      {
        key: '1',
        title: 'Iskander Mirza',
        titleDate: '(1899 - 1969)',
        firstHeading: 'In Office:',
        firstDescription: '23 March 1956 - 27 October 1958',
        secondHeading: 'Party:',
        secondDescription: 'Republican Party',
        image: require('../assets/one_iskandar_mirza.png')
      },
      {
        key: '2',
        title: 'Ayub Khan',
        titleDate: '(1907 - 1974)',
        firstHeading: 'In Office:',
        firstDescription: '27 October 1958 - 8 June 1962\n' + '8 June 1962 - 25 March 1969',
        secondHeading: 'Party:',
        secondDescription: 'Convention Muslim League',
        image: require('../assets/ayub_khan.png')
      },
      {
        key: '3',
        title: 'Yahya Khan',
        titleDate: '(1917 – 1980)',
        firstHeading: 'In Office:',
        firstDescription: '25 March 1969 - 20 December 1971',
        secondHeading: 'Party:',
        secondDescription: '',
        image: require('../assets/yahya_khan.png')
      },
      {
        key: '4',
        title: 'Zulfikar Ali Bhutto',
        titleDate: '(1928 - 1979)',
        firstHeading: 'In Office:',
        firstDescription: '20 December 1971 - 13 August 1973',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/zulfikar_ali_bhutto.png')
      },
      {
        key: '5',
        title: 'Fazal Ilahi Chaudhry',
        titleDate: '(1904 - 1982)',
        firstHeading: 'In Office:',
        firstDescription: '14 August 1973 - 16 September 1978',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/fazal_ilahi_chaudhry.png')
      },
      {
        key: '6',
        title: 'Muhammad Zia-ul-Haq',
        titleDate: '(1924 - 1988)',
        firstHeading: 'In Office:',
        firstDescription: '16 September 1978 - 17 August 1988',
        secondHeading: 'Party:',
        secondDescription: '',
        image: require('../assets/muhammad_zia_ul_haq.png')
      },
      {
        key: '7',
        title: 'Ghulam Ishaq Khan',
        titleDate: '(1915 - 2006)',
        firstHeading: 'In Office:',
        firstDescription: '17 August 1988 - 18 July 1993',
        secondHeading: 'Party:',
        secondDescription: 'Independent',
        image: require('../assets/ghulam_ishaq_khan.png')
      },
      {
        key: '8',
        title: 'Wasim Sajjad',
        titleDate: '(1941 - )',
        firstHeading: 'In Office:',
        firstDescription: '18 July 1993 - 14 November 1993',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (N)',
        image: require('../assets/wasim_sajjad.png')
      },
      {
        key: '9',
        title: 'Farooq Leghari',
        titleDate: '(1940 - 2010)',
        firstHeading: 'In Office:',
        firstDescription: '14 November 1993 - 2 December 1997',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/farooq_leghari.png')
      },
      {
        key: '10',
        title: 'Wasim Sajjad',
        titleDate: '(1941 - )',
        firstHeading: 'In Office:',
        firstDescription: '2 December 1997 - 1 January 1998',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (N)',
        image: require('../assets/wasim_sajjad.png')
      },
      {
        key: '11',
        title: 'Muhammad Rafiq Tarar',
        titleDate: '(1929 - )',
        firstHeading: 'In Office:',
        firstDescription: '1 January 1998 - 20 June 2001',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (N)',
        image: require('../assets/muhammad_rafiq_tarar.png')
      },
      {
        key: '12',
        title: 'Pervez Musharraf',
        titleDate: '(1943 - )',
        firstHeading: 'In Office:',
        firstDescription: '20 June 2001 - 6 October 2007\n' + '6 October 2007 - 18 August 2008',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (Q)',
        image: require('../assets/pervez_musharraf.png')
      },
      {
        key: '13',
        title: 'Muhammad Mian Soomro',
        titleDate: '(1950 - )',
        firstHeading: 'In Office:',
        firstDescription: '18 August 2008 - 9 September 2008',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (Q)',
        image: require('../assets/muhammad_mian_soomro.png')
      },
      {
        key: '14',
        title: 'Asif Ali Zardari',
        titleDate: '(1955 - )',
        firstHeading: 'In Office:',
        firstDescription: '9 September 2008 - 9 September 2013',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/asif_ali_zardari.png')
      },
      {
        key: '15',
        title: 'Mamnoon Hussain',
        titleDate: '(1940 - )',
        firstHeading: 'In Office:',
        firstDescription: '9 September 2013 - 9 September 2018',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (N)',
        image: require('../assets/mamnoon_hussain.png')
      },
      {
        key: '16',
        title: 'Arif Alvi',
        titleDate: '(1949 - )',
        firstHeading: 'In Office:',
        firstDescription: '9 September 2018 - Incumbent',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Tehreek - e - Insaf',
        image: require('../assets/ArifAlvi.jpg')
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={PresidentsList}
          renderItem={({ item }) =>
            <Card>
              <View>
                <Image source={item.image} style={styles.image} resizeMode="stretch" />
              </View>

              <View style={styles.titleBox} >
                <Text style={styles.titleText} >
                  {item.title}
                </Text>
                <Text style={styles.titleDate} >
                  {item.titleDate}
                </Text>
              </View>

              <View style={[{ flexDirection: 'column', justifyContent: 'flex-start' }, styles.firstRow]}>
                <View style={styles.firstHeading}>
                  <Text style={styles.headingText} >{item.firstHeading}</Text>
                </View>

                <View style={styles.firstDescription} >
                  <Text style={styles.descriptionText} >{item.firstDescription}</Text>
                </View>
              </View>

              <View style={[{ flexDirection: 'column', justifyContent: 'flex-start' }, styles.secondRow]}>
                <View style={styles.secondHeading} >
                  <Text style={styles.headingText} >{item.secondHeading}</Text>
                </View>

                <View style={styles.secondDescription} >
                  <Text style={styles.descriptionText} >{item.secondDescription}</Text>
                </View>
              </View>
            </Card>
          }
        />
      </View>
    );
  }
}

export default PresidentsScreen;