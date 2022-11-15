import React, { useContext } from 'react';
import { StoreContext } from '../../store/context';
import theme from '../../style/theme';

import Loader from '../loader';
import Container, { Modal, ModalContent, ModalTitle } from './styled';

const PageContainer = ({ 
    children, 
    loading, 
  }) => {
  const { modal } = useContext(StoreContext);
  const { visible, title, content, onBackdropPress } = modal;

  return (
    <Container>
      <Loader loading={loading}>
        { children }
      </Loader>
      <Modal
        isVisible={visible}
        onBackdropPress={onBackdropPress}
      >
        <ModalTitle title={title} titleStyle={{ color: theme.colors.text }} />
        <ModalContent>{ content }</ModalContent>
      </Modal>
    </Container>
  );
};

export default PageContainer;
