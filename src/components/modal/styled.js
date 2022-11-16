import {Dialog} from '@rneui/themed';
import styled from 'styled-components';
import theme from '../../style/theme';

const Container = styled(Dialog)``;

export const ModalTitle = styled(Dialog.Title)``;

export const ModalContent = styled.Text`
  color: ${theme.colors.text};
`;

export default Container;
