import styled from 'styled-components/native';
import { Text } from 'native-base';

export default styled(Text)<{ note?: boolean }>`
  color: ${props => props.note ? props.theme.text.noteColor : props.theme.text.color};
`;