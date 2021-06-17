import React from 'react'
import styled from 'styled-components/native'
import { CardItem } from 'native-base';

export default styled(CardItem)<{ transparent?: boolean }>`
backgroundColor: ${props => props.transparent ? 'transparent' : props.theme.cardItem.backgroundColor};
`;