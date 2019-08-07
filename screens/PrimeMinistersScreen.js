import React, { Component } from 'react';
import { View, FlatList, Image, Text, ScrollView } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/ScreensStyle';

class PrimeMinistersScreen extends Component {

  static navigationOptions = {
    title: 'Prime Ministers',
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
    const PrimeMinistersList = [
      {
        key: '1',
        title: 'Liaquat Ali khan',
        titleDate: '(1895 - 1951)',
        firstHeading: 'In Office:',
        firstDescription: '14 August 1947 - 16 October 1951',
        secondHeading: 'Party:',
        secondDescription: 'Muslim League',
        image: require('../assets/liaquat_ali_khan.png')
      },
      {
        key: '2',
        title: 'Khawaja Nazimuddin',
        titleDate: '(1894 - 1964)',
        firstHeading: 'In Office:',
        firstDescription: '17 October 1951 - 17 April 1953\n' + '8 June 1962 - 25 March 1969',
        secondHeading: 'Party:',
        secondDescription: 'Muslim League',
        image: require('../assets/khawaja_nazimuddin.png')
      },
      {
        key: '3',
        title: 'Muhammad Ali Bogra',
        titleDate: '(1909 - 1963)',
        firstHeading: 'In Office:',
        firstDescription: '17 April 1953 - 12 August 1955',
        secondHeading: 'Party:',
        secondDescription: 'Muslim League',
        image: require('../assets/mohammad_ali_bogra.png')
      },
      {
        key: '4',
        title: 'Chaudhry Muhammad Ali',
        titleDate: '(1905–1980)',
        firstHeading: 'In Office:',
        firstDescription: '12 August 1955 - 12 September 1956',
        secondHeading: 'Party:',
        secondDescription: 'Muslim League',
        image: require('../assets/chaudhary_muhammad_ali.png')
      },
      {
        key: '5',
        title: 'Hussain Shaheed Suhrawardy',
        titleDate: '(1892 - 1963)',
        firstHeading: 'In Office:',
        firstDescription: '12 September 1956 - 17 October 1957',
        secondHeading: 'Party:',
        secondDescription: 'Awami League',
        image: require('../assets/hussain_shaheed_suhrawardy.png')
      },
      {
        key: '6',
        title: 'Ibrahim Ismail Chundrigar',
        titleDate: '(1898 - 1968)',
        firstHeading: 'In Office:',
        firstDescription: '17 October 1957 - 16 December 1957',
        secondHeading: 'Party:',
        secondDescription: 'Muslim League',
        image: require('../assets/ibrahim_ismail_chundrigar.png')
      },
      {
        key: '7',
        title: 'Feroz Khan Noon',
        titleDate: '(1893 - 1970)',
        firstHeading: 'In Office:',
        firstDescription: '16 December 1957 - 7 October 1958',
        secondHeading: 'Party:',
        secondDescription: 'Republican Party',
        image: require('../assets/feroz_khan_noon.png')
      },
      {
        key: '8',
        title: 'Ayub Khan',
        titleDate: '(1907 - 1974)',
        firstHeading: 'In Office:',
        firstDescription: '24 October 1958 - 28 October 1958',
        secondHeading: 'Party:',
        secondDescription: 'Independent',
        image: require('../assets/ayub_khan.png')
      },
      {
        key: '9',
        title: 'Nurul Amin',
        titleDate: '(1893 - 1974)',
        firstHeading: 'In Office:',
        firstDescription: '7 December 1971 - 20 December 1971',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League',
        image: require('../assets/nurul_amin.png')
      },
      {
        key: '10',
        title: 'Zulfikar Ali Bhutto',
        titleDate: '(1928 - 1979)',
        firstHeading: 'In Office:',
        firstDescription: '14 August 1973 - 5 July 1977',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/zulfikar_ali_bhutto.png')
      },
      {
        key: '11',
        title: 'Muhammad Khan Junejo',
        titleDate: '(1932 - 1993)',
        firstHeading: 'In Office:',
        firstDescription: '24 March 1985 - 29 May 1988',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (Independent)',
        image: require('../assets/mohammad_khan_junejo.png')
      },
      {
        key: '12',
        title: 'Benazir Bhutto',
        titleDate: '(1953 - 2007)',
        firstHeading: 'In Office:',
        firstDescription: '2 December 1988 - 6 August 1990',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/benazir_bhutto.png')
      },
      {
        key: '13',
        title: 'Ghulam Mustafa Jatoi',
        titleDate: '(1931 - 2009)',
        firstHeading: 'In Office:',
        firstDescription: '6 August 1990 - 6 November 1990',
        secondHeading: 'Party:',
        secondDescription: "National People's Party",
        image: require('../assets/ghulam_mustafa_jatoi.png')
      },
      {
        key: '14',
        title: 'Muhammad Nawaz Sharif',
        titleDate: '(1949 - )',
        firstHeading: 'In Office:',
        firstDescription: '6 November 1990 - 18 April 1993',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League (N)',
        image: require('../assets/nawaz_sharif_two.png')
      },
      {
        key: '15',
        title: 'Balakh Sher Mazari',
        titleDate: '(1928 - )',
        firstHeading: 'In Office:',
        firstDescription: '18 April 1993 - 26 May 1993',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/balakh_sher_mazari.png')
      },
      {
        key: '16',
        title: 'Muhammad Nawaz Sharif',
        titleDate: '(1949 - )',
        firstHeading: 'In Office:',
        firstDescription: '26 May 1993 - 18 July 1993',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (N)",
        image: require('../assets/nawaz_sharif_two.png')
      },
      {
        key: '17',
        title: 'Moeenuddin Ahmad Qureshi',
        titleDate: '(1930 - 2016)',
        firstHeading: 'In Office:',
        firstDescription: '18 July 1993 - 19 October 1993',
        secondHeading: 'Party:',
        secondDescription: "Independent",
        image: require('../assets/moeenuddin_qureshi.png')
      },
      {
        key: '18',
        title: 'Benazir Bhutto',
        titleDate: '(1953 – 2007)',
        firstHeading: 'In Office:',
        firstDescription: '19 October 1993 - 5 November 1996',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/benazir_bhutto.png')
      },
      {
        key: '19',
        title: 'Malik Meraj Khalid',
        titleDate: '(1916 - 2003)',
        firstHeading: 'In Office:',
        firstDescription: '5 November 1996 - 17 February 1997',
        secondHeading: 'Party:',
        secondDescription: "Independent",
        image: require('../assets/malik_meraj_khalid.png')
      },
      {
        key: '20',
        title: 'Nawaz Sharif',
        titleDate: '(1949 - )',
        firstHeading: 'In Office:',
        firstDescription: '17 February 1997 - 12 October 1999',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (N)",
        image: require('../assets/nawaz_sharif_two.png')
      },
      {
        key: '21',
        title: 'Zafarullah khan Jamali',
        titleDate: '(1944 - )',
        firstHeading: 'In Office:',
        firstDescription: '23 November 2002 - 26 June 2004',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (Q)",
        image: require('../assets/zafarullah_khan_jamali.png')
      },
      {
        key: '22',
        title: 'Chaudhry Shujaat Hussain',
        titleDate: '(1946 - )',
        firstHeading: 'In Office:',
        firstDescription: '30 June 2004 - 26 August 2004',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (Q)",
        image: require('../assets/shujaat_husssain.png')
      },
      {
        key: '23',
        title: 'Shaukat Aziz',
        titleDate: '(1949 - )',
        firstHeading: 'In Office:',
        firstDescription: '28 August 2004 - 15 November 2007',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (Q)",
        image: require('../assets/shaukat_aziz.png')
      },
      {
        key: '24',
        title: 'Muhammad Mian Soomro',
        titleDate: '(1950 - )',
        firstHeading: 'In Office:',
        firstDescription: '16 November 2007 - 24 March 2008',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (Q)",
        image: require('../assets/muhammad_mian_soomro.png')
      },
      {
        key: '25',
        title: 'Yousaf Raza Gillani',
        titleDate: '(1952 - )',
        firstHeading: 'In Office:',
        firstDescription: '25 March 2008 - 19 June 2012',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/yousaf_gilani.png')
      },
      {
        key: '26',
        title: 'Raja Pervaiz Ashraf',
        titleDate: '(1950 - )',
        firstHeading: 'In Office:',
        firstDescription: '22 June 2012 - 24 March 2013',
        secondHeading: 'Party:',
        secondDescription: "Pakistan People's Party",
        image: require('../assets/raja_pervaiz_ashraf.png')
      },
      {
        key: '27',
        title: 'Mir Hazar Khan Khoso',
        titleDate: '(1929 - )',
        firstHeading: 'In Office:',
        firstDescription: '25 March 2013 - 5 June 2013',
        secondHeading: 'Party:',
        secondDescription: "Independent",
        image: require('../assets/mir_hazar_khan_khoso.png')
      },
      {
        key: '28',
        title: 'Muhammad Nawaz Sharif',
        titleDate: '(1949 - )',
        firstHeading: 'In Office:',
        firstDescription: '5 June 2013 - 28 July 2017',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (N)",
        image: require('../assets/nawaz_sharif_two.png')
      },
      {
        key: '29',
        title: 'Shahid Khaqan Abbasi',
        titleDate: '(1958 - )',
        firstHeading: 'In Office:',
        firstDescription: '1 August 2017 - 31 May 2018',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Muslim League (N)",
        image: require('../assets/shahid_khaqan_abbasi.png')
      },
      {
        key: '30',
        title: 'Imran Khan',
        titleDate: '(1952 - )',
        firstHeading: 'In Office:',
        firstDescription: '18 August 2018 - Incumbent',
        secondHeading: 'Party:',
        secondDescription: "Pakistan Tehreek - e - Insaf",
        image: require('../assets/imranKhan.jpg')
      },
    ];
    return (
      <View style={styles.mainContainer}>
          <FlatList
            data={PrimeMinistersList}
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
                    <Text style={styles.headingText} >
                      {item.secondHeading}
                    </Text>
                  </View>

                  <View style={styles.secondDescription} >
                    <Text style={styles.descriptionText} >
                      {item.secondDescription}
                    </Text>
                  </View>
                </View>
              </Card>
            }
          />
      </View>
    );
  }
}

export default PrimeMinistersScreen;