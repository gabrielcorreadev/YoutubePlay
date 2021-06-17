import React from 'react'
import styled from 'styled-components/native';
import { colors } from '../../../styles/base';
import { StatusBar } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const StatusBarNav = () => {
  const themeContext = useContext(ThemeContext);

    return (<StatusBar
    backgroundColor={themeContext.statusBar.backgroundColor}
    barStyle={themeContext.statusBar.barStyle}
  />);
}

export default StatusBarNav;