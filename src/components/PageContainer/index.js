import React from 'react';

import Loader from '../Loader';

import Container from './styled';

const PageContainer = ({children, loading}) => {
  return (
    <Container>
      <Loader loading={loading}>{children}</Loader>
    </Container>
  );
};

export default PageContainer;
