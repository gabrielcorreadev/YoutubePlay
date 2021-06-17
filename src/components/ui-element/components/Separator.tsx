import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Separator, Text } from 'native-base';
import { Children, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyleSheetProperties } from 'react-native';

interface Props { 
  noShadow?: boolean;
  style?: StyleSheetProperties;
  children?: ReactNode;
}


const SeparatorComponent = ({ noShadow, style , children }: Props) => {
  const themeContext = useContext(ThemeContext);
  return (<Separator
  style={{backgroundColor:themeContext.header.backgroundColor}}>{children}</Separator>);
}

export default SeparatorComponent;