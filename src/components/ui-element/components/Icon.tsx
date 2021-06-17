import styled from 'styled-components/native'
import { Icon } from 'native-base';

export default styled(Icon)`
  color: ${props => props.theme.text.color};
`;