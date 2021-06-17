import { DefaultTheme } from 'styled-components'
import { colors } from '../styles/base';

const defaultTheme: DefaultTheme = {
  borderRadius: '5px',
  button: {
    backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.white
  },
  footer: {
    backgroundColor: colors.white,
  },
  footerTab: {
    backgroundColor: colors.white,
    activeColor: colors.primary,
    color: colors.grayLight,
  },
  statusBar: {
    backgroundColor: colors.white,
    barStyle: 'dark-content',
  },
  spinner: {
    color: colors.primary,
  },
  header: {
    backgroundColor: colors.white,
  },
  headerTitle: {
    color: colors.black,
  },
  text: {
    color: colors.black,
    noteColor: colors.grayLight
  },
  cardProfile: {
    backgroundColor: colors.white,
    photo: {
      borderColor: colors.white,
      backgroundColor: colors.white,
    },
    title: {
      color: colors.blackLight,
    },
    description: {
      color: colors.grayLight,
    },
  },
  cardItem: {
    backgroundColor: colors.white,
  },
  inputSearch: {
    backgroundColor: colors.grayExtLight,
    borderColor: colors.grayExtLight,
    placeHolderColor: colors.gray,
    color: colors.grayLight
  },
  input: {
    backgroundColor: colors.grayExtLight,
    borderColor: colors.grayExtLight,
    placeHolderColor: colors.gray,
    color: colors.grayLight
  },
  label: {
    color: colors.white,
  },
  titleForm:{
    color: colors.black,
  },
  subtitleForm: {
    color: colors.black,
  },
  colors: {
    primary: '#226B74',
    secondary: '#254B5A',
    tertiary: '#5DA6A7'
  },
}

export { defaultTheme }