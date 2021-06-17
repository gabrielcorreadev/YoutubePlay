import styled from 'styled-components/native'
import { Label } from 'native-base';
import { fonts } from '../../../styles/base';

export default styled(Label)`
  color: ${props => props.theme.text.color};
  font-family: ${fonts.primary};
`;