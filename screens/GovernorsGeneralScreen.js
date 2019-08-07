import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/ScreensStyle';

class GovernorsGeneralScreeen extends Component {

  static navigationOptions = {
    title: 'Governors General',
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
    const GovernorsGeneralList = [
      {
        key: '1',
        title: 'Muhammad Ali Jinnah',
        titleDate: '(1876 - 1948)',
        firstHeading: 'In Office:',
        firstDescription: '15 August 1947 - 11 September 1948',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League',
        image: require('../assets/jinnah.jpg')
      },
      {
        key: '2',
        title: 'Sir Khawaja Nazimuddin',
        titleDate: '(1894 - 1964)',
        firstHeading: 'In Office:',
        firstDescription: '14 September 1948 - 17 October 1951',
        secondHeading: 'Party:',
        secondDescription: 'Pakistan Muslim League',
        image: require('../assets/khawaja_nazimuddin.png')
      },
      {
        key: '3',
        title: 'Sir Ghulam Muhammad',
        titleDate: '(1895 – 1956)',
        firstHeading: 'In Office:',
        firstDescription: '17 October 1951 - 7 August 1955',
        secondHeading: 'Party:',
        secondDescription: 'Independent',
        image: require('../assets/ghulam_muhammad.png')
      },
      {
        key: '4',
        title: 'Iskander Mirza',
        titleDate: '(1899 - 1969)',
        firstHeading: 'In Office:',
        firstDescription: '7 August 1955 - 23 March 1956',
        secondHeading: 'Party:',
        secondDescription: 'Republican Party',
        image: require('../assets/one_iskandar_mirza.png')
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={GovernorsGeneralList}
          renderItem={({ item }) =>
            <Card>
              <View>
                <Image source={item.image} style={styles.image} resizeMode="stretch" />
              </View>

              <View style={styles.titleBox} >
                <Text style={styles.titleText} >{item.title}</Text>
                <Text style={styles.titleDate} >{item.titleDate}</Text>
              </View>

              <View style={[{ flexDirection: 'column', justifyContent: 'flex-start' }, styles.firstRow]}>
                <View style={styles.firstHeading}><Text style={styles.headingText}>{item.firstHeading}</Text>
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

export default GovernorsGeneralScreeen;