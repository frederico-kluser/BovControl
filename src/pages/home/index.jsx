import React, { useContext, useEffect } from 'react';
import { Button, Text } from '@rneui/themed';
import PageContainer from '../../components/page-container';
import { StoreContext } from '../../store/context';

const Home = ({ navigation }) => {
  const [loading, setLoading] = React.useState(true);
  const { farmer, checklist, showModal } = useContext(StoreContext);

  useEffect(() => {
    console.log('farmer :', farmer);
    console.log('checklist :', checklist);
    setTimeout(() => {

      setLoading(false);
      if (!farmer) {
        showModal('test title', 'test content', () => {
          console.log('onBackdropPress');
        });
      }
      
    }, 1000);
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
