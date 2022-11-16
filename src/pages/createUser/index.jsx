import PageContainer from '../../components/page-container';
import validator from 'validator';

import { Button , Input } from '@rneui/themed';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { StoreContext } from '../../store/context';
import checkForm from '../../utils/form';
import { createFarmer } from '../../database/realm';

const CreateUser = ({ navigation }) => {
  const { showModal } = useContext(StoreContext);

  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [farmCity, setFarmCity] = useState('');

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    showModal('New User', 'we need initial data to create our checklists');
  }, []);
  
  useEffect(() => {
    setValidForm(checkForm([
      validator.isLength(name, { min: 3 }),
      validator.isLength(farmName, { min: 3 }),
      validator.isLength(farmCity, { min: 3 }),
    ]));
  }, [name, farmName, farmCity]);

  return (
    <PageContainer>
      <Input placeholder='Name' onChangeText={setName} value={name} />
      <Input placeholder='Farm Name' onChangeText={setFarmName} value={farmName} />
      <Input placeholder='Farm City' onChangeText={setFarmCity} value={farmCity} />
      <Button title="Register" loading={false} disabled={!validForm} onPress={async () => {
        await createFarmer({
          _id: 1,
          name,
          farm_name: farmName,
          farm_city: farmCity,
        })
        navigation.reset({
          index: 0,
          routes: [{ name: 'BovControl' }],
        });
      }} />
    </PageContainer>
  );
  };

export default CreateUser;
