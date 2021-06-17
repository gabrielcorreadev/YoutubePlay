import styled from 'styled-components/native';
import { Text } from 'native-base';
import { fonts } from '../../../styles/base';

export default styled(Text)<{ subtitle?: boolean }>`
  color: ${props => props.theme.titleForm.color};
  font-size: ${props => props.subtitle ? '18px' : '40px'};
  font-family: ${fonts.lg};
`;