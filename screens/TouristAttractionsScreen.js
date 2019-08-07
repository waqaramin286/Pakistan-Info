import React, { Component } from 'react';
import { View, FlatList, Image, Text } from 'react-native';
import { Card } from 'native-base';

import styles from '../styles/TouristAttractionsStyle';

class TouristAttractionsScreen extends Component {

  static navigationOptions = {
    title: 'Tourist Attractions',
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
    const TouristAttractionsList = [
      {
        key: '1',
        title: 'Fairy Meadows',
        firstHeading: 'Fairy Meadows famous for its beautiful lush green plateaus and World’s ninth biggest mountain Nanga Parbat (the Killer Mountain) is located in Diamer, Gilgit-Baltistan.\nThe place was named Fairy Meadows in 1953 by an Australian climber Hermann Bhul due to its mesmerizing beauty.\nHe was here to climb the peak of Nanga Parbat. He became the first one to summit the mountain.\nFairy Meadows is also called “Heaven on Earth” due to its matchless beauty.',
        image: require('../assets/fairy_meadows.png')
      },
      {
        key: '2',
        title: 'Astola Island',
        firstHeading: 'Astola Island is situated in Balochistan.' +
          ' It is also known as Island of the seven Hills.' +
          ' It is an uninhabited island in the Arabian Sea.The Island is a part of Pasni sub-district of Gwadar District.' +
          ' The island is 6.7 Km in length and a maximum width of 2.3 Km.\n' +
          'The highest point of the island is 246 feet above sea level.' +
          ' There is no source of fresh water on the island.So there are no trees on the island.' +
          ' The vegetation depends on the occasional rainfall and soil moisture for survival.',
        image: require('../assets/astola_sland.png')
      },
      {
        key: '3',
        title: 'Badshahi Mosque',
        firstHeading: 'Badshahi Mosque is the second largest mosque of Pakistanlocated in Lahore.' +
          ' It was built in 1673 A.D.by the sixth Mughal Emperor Aurangzeb Alamgir.\n' +
          'The mosque remained the largest mosque of the world from 1673 to 1986,' +
          ' when it was overtaken in capacity and size upon the completion of Shah Faisal Mosque in Islamabad.' +
          ' It has a total area of 29, 867.2 square meters and can accommodate up to 100, 000 worshipers.\n' +
          'The mosque has four corner minarets, each has a height of 176 feet and 67 feet  circumference.\n' +
          'The central dome has 70 feet 6 inches  diameter at bugling and it is 49 feet  high.' +
          ' The mosque has also two smaller domes, one on each side of large dome.' +
          ' Each small dome has 54 feet diameter at bugling and a height of 32 feet.',
        image: require('../assets/badshahi_masjid.png')
      },
      {
        key: '4',
        title: 'Ansoo Lake',
        firstHeading: 'Ansoo Lake is located in Kaghan Valley of District Mansehra, Khyber Pakhtunkhwa.' +
          ' It is located at an altitude of 13,927 feet above sea level and considered among one of the highest lakes of Himalayas.\n' +
          'The lake is situated near Malika Parbat, the highest mountain of Kaghan Valley.' +
          ' The lake is shaped like a tear (Ansoo) thats why it is named Ansoo Lake.',
        image: require('../assets/ansu_lake.png')
      },
      {
        key: '5',
        title: 'Gupis Valley',
        firstHeading: 'Gupis Valley is located about 70 miles in west of Gilgit on the bank of River Gilgit.' +
          ' A few kilometers from the valley of Gupis is a charming lake called Khalti Lake.\n' +
          'It is famous for being habitat of trout fish.' +
          ' The lake is formed due to stretch of river near the village of Khalti\n' +
          'The dark blue waters of lake during summer look very charming.' +
          ' The lake usually freezes during winter and villagers of Khalti can walk on this.',
        image: require('../assets/gupis_valley.png')
      },
      {
        key: '6',
        title: 'Kel Valley',
        firstHeading: 'Kel Valley is situated 19 Km from Sharda and 90 Km from Authmuqam' +
          ' in District Neelum of Azad Jammu & Kashmir.\n' +
          'It is a small valley at a height of 2097 meters above sea level.' +
          ' The Shounter Nallah joins River Neelam at this place and leads to Gilgit Agency' +
          ' over the Shandur Pass which is at a height of 4420 meters above sea level.\n' +
          'Kel is a base camp of mountaineering activities up to “Sarawaali Peak” which is 6326 meters high,' +
          ' and glacier(about 25 Km long) which are said to be the highest peak and longest glaciers of Azad Kashmir.\n' +
          'From Kel a long track goes towards Nanga Parbat over the Shounter Gali which is' +
          ' 4420 meters above sea level.' +
          ' The beautiful plateau of Arang Kel can be reached after 2 hours of hike from Kel.',
        image: require('../assets/kel_valley.png')
      },
      {
        key: '7',
        title: 'Lahore Fort',
        firstHeading: 'Lahore Fort is located in the historical city of Lahore.' +
          ' Though irregular in scheme the fort measures about 427 meters east-west and' +
          ' 335 meters north-south excluding the fortification wall added later during the' +
          ' Sikh rule of Maharaja Ranjit Singh (1799 – 1839 A.D).\n' +
          'The art of the fort building  reflects a series of monuments from Emperor Akbar' +
          ' (ruled: 1556 – 1605) to the Aurangzeb (ruled: 1658 – 1707 ).\n' +
          'The court of Emperor Akbar occupies the south-east area of the fort but most of' +
          ' the building has been extinct and the Masti / Akbari is still facing the Maryam Zamani Mosque.\n' +
          'The northern half of the fort with its architectural beauty is divided into six quadrangles' +
          ' from Akbari Gate to Shish Mahal.',
        image: require('../assets/lahore_fort.png')
      },
      {
        key: '8',
        title: 'Makra Peak',
        firstHeading: 'Makra Peak is a 3586 meters high Himalayan mountain located in Tehsil Balako' +
          ' of Mansehra District in Khyber Pakhtunkhwa.\n' +
          'According to local people they named it Makra Peak because snow formation over the' +
          ' peak resembles the shape of a spider.\n' +
          'The iconic Makra Peak of Shogran Valley is located in south - east of Kiwai and south of Paye Meadow.' +
          ' From Makra Top the visitors can enjoy the views of the Kaghan Valley on one side and' +
          ' mesmerizing Kashmir on another.\n' +
          'Many other famous mountains like Malika Parbat, Chambra, Musa Ka Musalla and' +
          ' Shingri are also visible from top.',
        image: require('../assets/makra_view.png')
      },
      {
        key: '9',
        title: 'Mehrgarh',
        firstHeading: 'Mehrgarh is a Neolithic site (7000 BCE to 2500 BCE) located 30 Km west of the' +
          ' town of Sibi and 120 Km south - east of Quetta on the Kachi plain of Balochistan.' +
          ' It is one of the oldest sites with evidence of agricultural activities in Asia.\n' +
          'Evidence of farming(wheat and barley) and herding(sheep, goats and cattle) have been discovered in the area.' +
          ' The discovery of Mehrgarh was made in 1974.' +
          ' The earliest settlement in Mehrgarh is found at north - east corner, is dated between 7000 BCE to 5500 BCE.\n' +
          'It was small agricultural village of 495 acre.The entire area covers several subsequent settlements.' +
          ' About 32000 art crafts have been discovered in this area.' +
          ' Mehrgarh is now conceived as forerunner to Civilization of Indus Valley.',
        image: require('../assets/mehrgarh.png')
      },
      {
        key: '10',
        title: 'Mohenjo Daro',
        firstHeading: 'Mohenjo Daro was built in 26th century BC.' +
          ' It is known as the largest city of the Indus Valley civilization, also famously known as the Harappa Civilization.\n' +
          'The Harappa Civilization was built in 3000 BC having the prehistoric Indus culture.' +
          ' The Indus Valley Civilization of today spans more of what is now Pakistan and the Northern side of India.\n' +
          'On the western side, it extends towards the Iranian border and towards the State of' +
          ' Gujarat in India at the southern side.\n' +
          'Moreover, on the Northern side, it goes to the area of Bactria.' +
          ' The major urban centers are at Mohenjo Daro, Harappa, Rakhigari, Lothal, Dholavira and Kalibangan.\n' +
          'The most notable thing about the ancient city of Mohenjo Daro is that it was one of' +
          ' the most developed cities of the era.\n' +
          'There was some incredible urban planning and outclass civil engineering done by the then people,' +
          ' as reported by the historians.' +
          ' At the time when the Indus Valley Civilization declined in the 19th century BC era,' +
          ' the great Mohenjo Daro was also abandoned.\n' +
          'The Mohenjo Daro Civilization is 4000 years old which is only the second known' +
          ' civilization after the great Chinese Civilization which is 7000 years old.',
        image: require('../assets/mohenjodaro.png')
      },
      {
        key: '11',
        title: 'Pakistan Monument',
        firstHeading: 'Pakistan Monument located in Islamabad is conceived as the National Monument of Pakistan.' +
          '  The monument was constructed as a tribute to the people who sacrificed their lives for the independence of Pakistan.\n' +
          'It represents the history, civilization and culture of Pakistan and mainly focuses on' +
          '  historical events of Pakistan Movement.\n' +
          'The murals on the petals of flower shaped architecture' +
          '  features Pakistan’s cultural heritage and historic events of Pakistan Movement.',
        image: require('../assets/pakistan_national_monument.png')
      },
      {
        key: '12',
        title: 'Phandar Valley',
        firstHeading: 'Phandar Valley is situated at 61 km from the valley of Gupis in' +
          ' District Ghizer of Gilgit - Baltistan.\n' +
          'A twisting road passing through lush green fields and forests with a view of' +
          ' flowing river and icy peaks will lead you to this charming valley.\n' +
          'From springs of crystal clear waters to lakes and rivers of deep blue water,' +
          ' there are all colors of nature’s beauty in Phandar Valley.\n' +
          'Wether of Phandar valley stays very pleasant between June and July and this is the' +
          ' best time to visit this valley.\n' +
          'Days stays fair and warm and nights are a little cold.',
        image: require('../assets/phandar_valley.png')
      },
      {
        key: '13',
        title: 'Lake Saif ul Malook',
        firstHeading: 'Lake Saif ul Malook is located about 8 km north from the town of Naran.' +
          ' It has an altitude of 3, 224 meters above sea level.\n' +
          'The lake is also famous for being habitat of large size Brown Trout fish, which weighup to 7 kilograms.' +
          ' Lake Saif ul Malook also provides a marvelous view of Malika Parbat,' +
          ' which is the highest peak of Kaghan Valley.\n' +
          'The best time to visit Lake Saif ul Malook is between May and the end July.' +
          ' It remains covered in snow during winter, and the road to the lake stays closed due to heavy snow fall.',
        image: require('../assets/saif_ul_maluk.png')
      },
      {
        key: '14',
        title: 'Satpara Lake',
        firstHeading: 'Satpara Lake is natural lake situated about 9 Km north of Skardu at an altitude of 2,635 meters.' +
          ' The lake is fed by Satpara Stream.It works as a key water supply source for the Skardu Town.\n' +
          'It is spread over an area of 2.5 Km.' +
          ' A story about this lake is famous among local people that there is a gold mine in the bottom of this lake.\n' +
          'They believe that this is the reason why its water seems to be shining in the day time.',
        image: require('../assets/stpara_lake.png')
      },
    ];
    return (
      <View style={styles.mainContainer}>
        <FlatList
          data={TouristAttractionsList}
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

export default TouristAttractionsScreen;