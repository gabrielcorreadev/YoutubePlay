import React from 'react'
import { Spinner } from 'native-base';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const SpinnerContent = () => {
  const themeContext = useContext(ThemeContext);

    return (<Spinner
    color={themeContext.spinner.color}
  />);
}

export default SpinnerContent;