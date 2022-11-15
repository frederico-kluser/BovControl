import React, { useContext, useEffect } from 'react';
import { Button, Text } from '@rneui/themed';
import PageContainer from '../../components/page-container';
import { StoreContext } from '../../store/context';
import getRealm from '../../database/realm';

const Home = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);
  // const { showModal } = useContext(StoreContext);

  useEffect(() => {
    getRealm().then(realm => {
      console.log('realm', realm);
      setLoading(false);

      if (!Object.keys(realm).length) {
        navigation.navigate('Checklist', {});
      }
    });
  }, []);

  return (
    <PageContainer loading={loading}>
      <Text>Hello World!!</Text>
      <Button
        title="Go to Checklist Page"
        onPress={() =>
          navigation.navigate('Checklist', {})
        }
        />
    </PageContainer>
  );
};

export default Home;
