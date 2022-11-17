import React from 'react';
import {ActivityIndicator} from 'react-native';

import Container, {LoaderText} from './styled';

const Loader = ({children, loading = false, message = 'Loading data...'}) =>
  loading ? (
    <Container>
      <LoaderText>{message}</LoaderText>
      <ActivityIndicator />
    </Container>
  ) : (
    children
  );

export default Loader;
