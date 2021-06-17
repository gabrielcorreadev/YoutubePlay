import {StyleSheet, Dimensions} from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
}
  
export const colors  = {
  primary: '#e72200',
  primaryLight: '#f64d46',
  white: '#FFFFFF',
  black: '#1b1c1e',
  blackLight: '#121212',
  green: '#5CE27F',
  grayLight:'#868ca4',
  grayExtLight:'#f0f2f5',
  gray: '#575757'

}

export const padding = {
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
}

export const fonts = {
  sm: 12,
  md: 18,
  lg: 'Gilroy-ExtraBold',
  primary: 'SF-Pro-Display-Semibold'
}