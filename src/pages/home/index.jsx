import React, { useContext, useEffect } from 'react';
import { Button, Text } from '@rneui/themed';
import PageContainer from '../../components/page-container';
import Loader from '../../components/loader';
import { StoreContext } from '../../store/context';

const Home = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);
  const { farmer, checklist } = useContext(StoreContext);

  useEffect(() => {
    console.log('farmer :', farmer);
    console.log('checklist :', checklist);
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
