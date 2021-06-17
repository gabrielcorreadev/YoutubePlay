import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Header, RnViewStyleProp, Text } from 'native-base';
import { Children, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyleProp } from 'react-native';
import style from '../../../styles/style';

interface Props { 
  noShadow?: boolean;
  transparent?: boolean;
  searchBar?: boolean;
  rounded?: boolean;
  style?: RnViewStyleProp;
  children?: ReactNode;
}


const HeaderComponent = ({ noShadow, transparent, rounded, style, searchBar, children }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (<Header
  style={[{backgroundColor:themeContext.header.backgroundColor}, style]}
  noShadow={noShadow}
  transparent={transparent}
  rounded={rounded}
  searchBar={searchBar}
  iosBarStyle={themeContext.statusBar.barStyle}
  androidStatusBarColor={themeContext.statusBar.backgroundColor}>{children}</Header>);
}

export default HeaderComponent;