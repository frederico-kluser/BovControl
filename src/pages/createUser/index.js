/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';

import PageContainer from '../../components/PageContainer';

import {StoreContext} from '../../store/context';
import checkForm from '../../utils/form';
import {createFarmer} from '../../database/realm';

import {Button, Input} from '@rneui/themed';

const CreateUser = ({navigation}) => {
  const {showModal} = useContext(StoreContext);

  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [farmCity, setFarmCity] = useState('');

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    showModal('New User', 'we need initial data to create our checklists');
  }, []);

  useEffect(() => {
    setValidForm(
      checkForm([name.length > 2, farmName.length > 2, farmCity.length > 2]),
    );
  }, [name, farmName, farmCity]);

  const handleCreateUser = async () => {
    await createFarmer({
      _id: 1,
      name,
      farm_name: farmName,
      farm_city: farmCity,
    });
    showModal('User added', 'we need initial data to create our checklists');
    navigation.reset({
      index: 0,
      routes: [{name: 'BovControl'}],
    });
  };

  return (
    <PageContainer>
      <Input placeholder="Name" onChangeText={setName} value={name} />
      <Input
        placeholder="Farm Name"
        onChangeText={setFarmName}
        value={farmName}
      />
      <Input
        placeholder="Farm City"
        onChangeText={setFarmCity}
        value={farmCity}
      />
      <Button
        title="Register"
        loading={false}
        disabled={!validForm}
        onPress={handleCreateUser}
      />
    </PageContainer>
  );
};

export default CreateUser;
