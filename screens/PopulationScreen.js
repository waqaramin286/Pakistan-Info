import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/PopulationStyle';

class PopulationScreen extends Component {

  static navigationOptions = {
    title: 'Population',
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
    const PopulationList = [
      {
        key: '1',
        title: 'Pakistan',
        firstHeading: '212,742,631\n' + '* 2017 Census',
        image: require('../assets/flagPakistan.png')
      },
      {
        key: '2',
        title: 'Islamabad',
        firstHeading: '2,006,572',
        image: require('../assets/faisal_mosque.png')
      },
      {
        key: '3',
        title: 'Tribal Areas',
        firstHeading: '5,001,676',
        image: require('../assets/tribal_areas.png')
      },
      {
        key: '4',
        title: 'Punjab',
        firstHeading: '110,012,442',
        image: require('../assets/punjab.png')
      },
      {
        key: '5',
        title: 'Sindh',
        firstHeading: "47,886,051",
        image: require('../assets/sindh.png')
      },
      {
        key: '6',
        title: 'Balochistan',
        firstHeading: "12,344,408",
        image: require('../assets/balochistan.png')
      },
      {
        key: '7',
        title: 'Khyber Pakthunkhwa',
        firstHeading: "30,523,371",
        image: require('../assets/kpk.png')
      },
      {
        key: '8',
        title: 'Azad Jammu and Kashmir',
        firstHeading: "4,045,366",
        image: require('../assets/flagAzadKashmir.png')
      },
      {
        key: '9',
        title: 'Gilgit - Baltistan',
        firstHeading: "922,745",
        image: require('../assets/flagGilgitBaltistan.png')
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={PopulationList}
          renderItem={({ item }) =>
            <Card>
              <View>
                <Image source={item.image} style={styles.image} resizeMode="stretch" />
              </View>

              <View style={styles.titleBox} >
                <Text style={styles.titleText} >
                  {item.title}
                </Text>
              </View>

              <View style={styles.description}>
                <Text style={styles.descriptionText} >{item.firstHeading}</Text>
              </View>
            </Card>
          }
        />
      </View>
    );
  }
}

export default PopulationScreen;