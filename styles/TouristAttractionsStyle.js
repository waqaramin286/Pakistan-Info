import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    padding: 8,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: undefined,
    height: 260,
  },
  titleBox: {
    backgroundColor: '#5fff99',
    marginTop: 0,
  },
  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
    textAlign: "center",
    color: '#000000',
    padding: 8,
  },
  description: {
    margin: 18,
  },
  descriptionText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 17,
    color: '#263238',
    lineHeight: 32,
  },
});