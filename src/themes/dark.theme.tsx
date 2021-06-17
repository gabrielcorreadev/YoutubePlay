import { DefaultTheme } from 'styled-components'
import { colors } from '../styles/base';

const darkTheme: DefaultTheme = {
  borderRadius: '5px',
  button: {
    backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.black
  },
  footer: {
    backgroundColor: colors.black,
  },
  footerTab: {
    backgroundColor: colors.black,
    activeColor: colors.primary,
    color: colors.grayLight,
  },
  statusBar: {
    backgroundColor: colors.black,
    barStyle: 'light-content',
  },
  spinner: {
    color: colors.white,
  },
  header: {
    backgroundColor: colors.black,
  },
  headerTitle: {
    color: colors.white,
  },
  text: {
    color: colors.white,
    noteColor: colors.grayLight
  },
  cardProfile: {
    backgroundColor: colors.black,
    photo: {
      borderColor: colors.black,
      backgroundColor: colors.black,
    },
    title: {
      color: colors.white,
    },
    description: {
      color: colors.grayLight,
    },
  },
  cardItem: {
    backgroundColor: colors.black,
  },
  inputSearch: {
    backgroundColor: colors.blackLight,
    borderColor: colors.blackLight,
    placeHolderColor: colors.gray,
    color: colors.white
  },
  input: {
    backgroundColor: colors.grayExtLight,
    borderColor: colors.grayExtLight,
    placeHolderColor: colors.gray,
    color: colors.grayLight
  },
  label: {
    color: colors.gray,
  },
  titleForm:{
    color: colors.white,
  },
  subtitleForm: {
    color: colors.white,
  },
  colors: {
    primary: '#226B74',
    secondary: '#254B5A',
    tertiary: '#5DA6A7'
  },
}

export { darkTheme }