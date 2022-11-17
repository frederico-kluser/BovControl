/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Button, Text} from '@rneui/themed';
import PageContainer from '../../components/page-container';
import getRealm from '../../database/realm';
import Item from '../../components/item';
import Container from './styled';

const Home = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);

  const [farmer, setFarmer] = React.useState({});
  const [checklists, setChecklists] = React.useState(<></>);

  useEffect(() => {
    getRealm().then(realm => {
      console.log('realm', JSON.stringify(realm, null, 2));
      setLoading(false);

      if (!Object.keys(realm.farmer).length) {
        navigation.reset({
          index: 0,
          routes: [{name: 'Create User'}],
        });
      } else {
        const {name, farm_name, farm_city} = realm.farmer[0];
        if (realm.checklist.length) {
          setChecklists(
            realm.checklist.map(
              ({
                _id,
                amount_of_milk_produced,
                had_supervision,
                number_of_cows_head,
                to__name,
                type,
              }) => (
                <Item
                  key={_id}
                  amount_of_milk_produced={amount_of_milk_produced}
                  had_supervision={had_supervision}
                  id={_id}
                  navigation={navigation}
                  number_of_cows_head={number_of_cows_head}
                  to__name={to__name}
                  type={type}
                />
              ),
            ),
          );
        }
        setFarmer({
          name,
          farmName: farm_name,
          farmCity: farm_city,
        });
      }
    });
  }, []);

  return (
    <PageContainer loading={loading}>
      <Text h4>{farmer.name}</Text>
      <Text h5>{farmer.farmName}</Text>
      <Text h5>{farmer.farmCity}</Text>
      <Container>
        {checklists}
        <Button
          title="Create new checklist"
          onPress={() => navigation.navigate('Checklist Management', {})}
        />
      </Container>
    </PageContainer>
  );
};

export default Home;
