import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/ScreensStyle';

class ArmyChiefsScreen extends Component {

  static navigationOptions = {
    title: 'Chiefs of Army Staff',
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
    const ArmyChiefsList = [
      {
        key: '1',
        title: 'General Sir Frank Walter Messervy',
        titleDate: '(Commander in Chief)',
        firstHeading: 'Service:',
        firstDescription: '15 August 1947 - 10 February 1948',
        secondHeading: 'Unit:',
        secondDescription: "9th Hodson's Horse",
        image: require('../assets/frank_walter.png')
      },
      {
        key: '2',
        title: 'General Douglas Gracy',
        titleDate: '(Commander in Chief)',
        firstHeading: 'Service:',
        firstDescription: '11 February 1948 - 16 January 1951',
        secondHeading: 'Unit:',
        secondDescription: '1st Gurkha Rifles',
        image: require('../assets/douglas.png')
      },
      {
        key: '3',
        title: 'Field Marshal Muhamamd Ayub Khan',
        titleDate: '(Commander in Chief)',
        firstHeading: 'Service:',
        firstDescription: '16 January 1951 - 26 October 1958',
        secondHeading: 'Unit:',
        secondDescription: '5 Punjab',
        image: require('../assets/ayub_khan.png')
      },
      {
        key: '4',
        title: 'General Muhammad Musa',
        titleDate: '(Commander in Chief)',
        firstHeading: 'Service:',
        firstDescription: '27 October 1958 - 17 June 1966',
        secondHeading: 'Unit:',
        secondDescription: '1 FF',
        image: require('../assets/muhammad_musa_khan.png')
      },
      {
        key: '5',
        title: 'General Muhammad Yahya Khan',
        titleDate: '(Commander in Chief)',
        firstHeading: 'Service:',
        firstDescription: '18 June 1966 - 20 December 1971',
        secondHeading: 'Unit:',
        secondDescription: '10 Baloch',
        image: require('../assets/yahya_khan.png')
      },
      {
        key: '6',
        title: 'Lieutenant General Gul Hassan Khan',
        titleDate: '(Commander in Chief)',
        firstHeading: 'Service:',
        firstDescription: '20 December 1971 - 3 March 1972',
        secondHeading: 'Unit:',
        secondDescription: '5 Horse',
        image: require('../assets/gul_hassan_khan.png')
      },
      {
        key: '7',
        title: 'General Tikka Khan',
        firstHeading: 'Service:',
        firstDescription: '3 March 1972 - 1 March 1976',
        secondHeading: 'Unit:',
        secondDescription: '12 Med Regt Arty',
        image: require('../assets/tikka_khan.png')
      },
      {
        key: '8',
        title: 'General Muhammad Zia-ul-Haq',
        firstHeading: 'Service:',
        firstDescription: '1 March 1976 - 17 August 1988',
        secondHeading: 'Unit:',
        secondDescription: 'Guides Cavalry',
        image: require('../assets/muhammad_zia_ul_haq.png')
      },
      {
        key: '9',
        title: 'General Mirza Aslam Beg',
        firstHeading: 'Service:',
        firstDescription: '17 August 1988 - 16 August 1991',
        secondHeading: 'Unit:',
        secondDescription: '16 Baloch',
        image: require('../assets/aslam_baig.png')
      },
      {
        key: '10',
        title: 'General Asif Nawaz',
        firstHeading: 'Service:',
        firstDescription: '16 August 1991 - 8 January 1993',
        secondHeading: 'Unit:',
        secondDescription: '5 Punjab',
        image: require('../assets/asif_nawaz.png')
      },
      {
        key: '11',
        title: 'General Abdul Waheed Kakar',
        firstHeading: 'Service:',
        firstDescription: '11 January 1993 - 12 January 1996',
        secondHeading: 'Unit:',
        secondDescription: '5 FF',
        image: require('../assets/abdul_waheed.png')
      },
      {
        key: '12',
        title: 'General Jehangir Karamat',
        firstHeading: 'Service:',
        firstDescription: '12 January 1996 - 6 October 1998',
        secondHeading: 'Unit:',
        secondDescription: '13 Lancers',
        image: require('../assets/jahangir_karamat.png')
      },
      {
        key: '13',
        title: 'General Pervez Musharraf',
        firstHeading: 'Service:',
        firstDescription: '6 October 1998 - 28 November 2007',
        secondHeading: 'Unit:',
        secondDescription: '16 (SP) Fd Regt Arty',
        image: require('../assets/pervez_musharraf.png')
      },
      {
        key: '14',
        title: 'General Ashfaq Parvez Kayani',
        firstHeading: 'Service:',
        firstDescription: '29 November 2007 - 29 November 2013',
        secondHeading: 'Unit:',
        secondDescription: '5 Baloch',
        image: require('../assets/ashfaq_kiani.png')
      },
      {
        key: '15',
        title: 'General Raheel Sharif',
        firstHeading: 'Service:',
        firstDescription: '29 November 2013 - 29 November 2016',
        secondHeading: 'Unit:',
        secondDescription: '6 FF',
        image: require('../assets/raheel.png')
      },
      {
        key: '16',
        title: 'General Qamar Javed Bajwa',
        firstHeading: 'Service:',
        firstDescription: '29 November 2016 - Current',
        secondHeading: 'Unit:',
        secondDescription: '16 Baloch',
        image: require('../assets/qamar_bajwa.png')
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={ArmyChiefsList}
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

export default ArmyChiefsScreen;