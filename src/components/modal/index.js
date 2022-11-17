import React, {useContext} from 'react';
import {StoreContext} from '../../store/context';
import theme from '../../style/theme';
import Container, {ModalContent, ModalTitle} from './styled';

const Modal = () => {
  const {modal} = useContext(StoreContext);
  const {visible, title, content, onBackdropPress} = modal;

  return (
    <Container isVisible={visible} onBackdropPress={onBackdropPress}>
      <ModalTitle title={title} titleStyle={{color: theme.colors.text}} />
      <ModalContent>{content}</ModalContent>
    </Container>
  );
};

export default Modal;
