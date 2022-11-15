import styled from 'styled-components';
import {Dialog} from '@rneui/themed';
import theme from '../../style/theme';

const Container = styled.View`
  flex: 1;
  padding: ${theme.spacing.pagePadding}px;
`;

export const Modal = styled(Dialog)``;

export const ModalTitle = styled(Dialog.Title)``;

export const ModalContent = styled.Text`
  color: ${theme.colors.text};
`;

export default Container;
