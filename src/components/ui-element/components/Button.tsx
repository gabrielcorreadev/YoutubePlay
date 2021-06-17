import React from 'react'
import styled from 'styled-components/native'
import { Button } from 'native-base';

export default styled(Button)<{ transparent?: boolean }>`
backgroundColor: ${props => props.transparent ? 'transparent' : props.theme.button.backgroundColor};
`;