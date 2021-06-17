import styled from 'styled-components/native'
import { Item } from 'native-base';

export default styled(Item)`
  color: ${props => props.theme.text.color};
`;