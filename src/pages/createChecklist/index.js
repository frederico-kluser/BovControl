import React, {useContext} from 'react';

import PageContainer from '../../components/page-container';

import {Button, Input} from '@rneui/themed';
import {useEffect, useState} from 'react';
import Select from '../../components/select';

import checkForm from '../../utils/form';
import getRealm, {createChecklist} from '../../database/realm';
import {StoreContext} from '../../store/context';

const CreateChecklist = ({navigation}) => {
  const {showModal} = useContext(StoreContext);

  const [loading, setLoading] = useState(true);
  const [checklistType, setChecklistType] = useState('BPA');
  const [milkAmount, setMilkAmount] = useState(0);
  const [cowAmount, setCowAmount] = useState(0);
  const [hadSupervisor, setHadSupervisor] = useState(false);
  const [supervisorName, setSupervisorName] = useState('');

  const [validForm, setValidForm] = useState(false);

  const [farmer, setFarmer] = React.useState({});

  useEffect(() => {
    getRealm().then(realm => {
      console.log('realm', JSON.stringify(realm, null, 2));
      const {name, farm_name, farm_city} = realm.farmer[0];
      setLoading(false);

      setFarmer({
        name,
        farmName: farm_name,
        farmCity: farm_city,
      });
    });
  }, []);

  useEffect(() => {
    setValidForm(
      checkForm([
        milkAmount > 0,
        cowAmount > 0,
        hadSupervisor ? supervisorName.length > 2 : true,
      ]),
    );
  }, [milkAmount, cowAmount, hadSupervisor, supervisorName]);

  const handleCreateChecklist = async () => {
    await createChecklist({
      _id: new Date().getTime(),
      type: checklistType,
      amount_of_milk_produced: parseInt(milkAmount),
      farmer__name: farmer.farmName,
      farmer__city: farmer.farmCity,
      from__name: farmer.name,
      to__name: supervisorName,
      number_of_cows_head: parseInt(cowAmount),
      had_supervision: hadSupervisor,
    });
    showModal('Added checklist', 'Now we can add your checklists', () => {
      navigation.reset({
        index: 0,
        routes: [{name: 'BovControl'}],
      });
    });
  };

  return (
    <PageContainer loading={loading}>
      <Select
        text="Checklist type"
        items={[
          {label: 'BPA', value: 'BPA'},
          {label: 'Antibiótico', value: 'Antibiótico'},
          {label: 'BPF', value: 'BPF'},
        ]}
        selectedValue={checklistType}
        setSelectedValue={setChecklistType}
      />
      <Input
        placeholder="Amount of milk produced"
        keyboardType="numeric"
        onChangeText={setMilkAmount}
        value={milkAmount}
        maxLength={10}
      />
      <Input
        placeholder="Number of cows head"
        keyboardType="numeric"
        onChangeText={setCowAmount}
        value={cowAmount}
        maxLength={10}
      />
      <Select
        text="Had supervision ?"
        items={[
          {label: 'No', value: false},
          {label: 'Yes', value: true},
        ]}
        selectedValue={hadSupervisor}
        setSelectedValue={value => {
          setHadSupervisor(value);
          if (!value) {
            setSupervisorName('');
          }
        }}
      />
      {hadSupervisor && (
        <Input
          placeholder="Supervisor Name"
          onChangeText={setSupervisorName}
          value={supervisorName}
        />
      )}
      <Button
        title="Register"
        loading={false}
        disabled={!validForm}
        onPress={handleCreateChecklist}
      />
    </PageContainer>
  );
};

export default CreateChecklist;
