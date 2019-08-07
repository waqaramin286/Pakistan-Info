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
    marginBottom: 12,
  },
  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    textAlign: "center",
    color: '#000000',
    paddingTop: 8,
  },
  titleDate: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    textAlign: "center",
    color: '#424242',
    paddingBottom: 8,
  },
  firstHeading: {
    marginLeft: 18,
    marginBottom: 0,
  },
  headingText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 16,
    color: '#212121',
  },
  firstDescription: {
    marginLeft: 18,
    marginBottom: 12,
  },
  descriptionText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#263238',
    lineHeight: 26,
  },
  secondHeading: {
    marginLeft: 18,
    marginBottom: 0,
  },
  secondDescription: {
    marginLeft: 18,
    marginBottom: 18,
  },
});