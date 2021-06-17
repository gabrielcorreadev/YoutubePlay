import React from 'react'
import styled from 'styled-components/native'
import { Container } from 'native-base';

export default styled(Container)`
  backgroundColor: ${props => props.theme.container.backgroundColor};
`;