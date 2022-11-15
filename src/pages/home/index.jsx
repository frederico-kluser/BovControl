import React from 'react';
import { Button } from '@rneui/themed';
import Container, {Title} from './styled';

const Home = ({ navigation }) => (
  <Container>
    <Title>Hello World!!</Title>
    <Button
      title="Go to Checklist Page"
      onPress={() =>
        navigation.navigate('Checklist', {})
      }
    />
  </Container>
);

export default Home;
