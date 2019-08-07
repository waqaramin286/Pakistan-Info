import React, { Component } from 'react';
import { Image, Text, View, StatusBar, ScrollView } from 'react-native';
import { List, ListItem, Left, Right, Icon } from 'native-base';

import styles from '../styles/HomeScreenStyle';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Pakistan Information',
    headerTitleStyle: {
      fontFamily: 'Roboto-Medium',
      fontSize: 20,
      color: '#212121',
    },
    headerStyle: {
      backgroundColor: '#00cc6a',
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.homeContainer} >
        <StatusBar barStyle="light-content" hidden={false} backgroundColor='#009a3d' />
        <Image
          style={styles.bannerImage}
          source={require('../assets/flagPakistanMain.jpg')} />

        <List >
          <ListItem
            onPress={() => navigate('GovernorsGeneral')}
            style={styles.listRow}>
            <Left>
              <Text style={styles.homeScreenListText} >Governors General</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem
            onPress={() => navigate('Presidents')}
            style={styles.listRow}>
            <Left>
              <Text style={styles.homeScreenListText} >Presidents</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem
            onPress={() => navigate('PrimeMinisters')}
            style={styles.listRow}>
            <Left>
              <Text style={styles.homeScreenListText} >Prime Ministers</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem
            onPress={() => navigate('ArmyChiefs')}
            style={styles.listRow}>
            <Left>
              <Text style={styles.homeScreenListText} >Chiefs of Army Staff</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem
            onPress={() => navigate('TouristAttractions')}
            style={styles.listRow}>
            <Left>
              <Text style={styles.homeScreenListText} >Tourist Attractions</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem
            onPress={() => navigate('Population')}
            style={styles.listRow}>
            <Left>
              <Text style={styles.homeScreenListText} >Population</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </ScrollView>
    );
  }
}

export default HomeScreen;

