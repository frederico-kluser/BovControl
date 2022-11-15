import React from 'react';
import { Button, Text } from '@rneui/themed';
import PageContainer from '../../components/page-container';

const Home = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);

  return (
    <PageContainer>
      {loading ? (
        <Text>Loading...</Text>
      ) : (<>
        <Text>Hello World!!</Text>
        <Button
          title="Go to Checklist Page"
          onPress={() =>
            navigation.navigate('Checklist', {})
          }
          />
      </>)}
    </PageContainer>
  );
};

export default Home;
