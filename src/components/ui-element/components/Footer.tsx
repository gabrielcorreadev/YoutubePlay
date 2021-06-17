import styled from 'styled-components/native'
import { Footer } from 'native-base';

export default styled(Footer)`
  backgroundColor: ${props => props.theme.footer.backgroundColor};
`;