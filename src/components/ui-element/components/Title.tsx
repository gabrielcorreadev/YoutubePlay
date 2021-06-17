import styled from 'styled-components/native';
import { Title } from 'native-base';

export default styled(Title)`
  color: ${props => props.theme.headerTitle.color};
  font-size: 24px;
  font-weight: 700;
`;