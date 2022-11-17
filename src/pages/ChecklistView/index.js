/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';

import PageContainer from '../../components/PageContainer';
import getRealm from '../../database/realm';

import {Title, Content} from './styled';

const ChecklistView = ({route}) => {
  const [data, setData] = React.useState({
    created_at: new Date('2020-01-01'),
    updated_at: new Date('2020-01-01'),
  });

  useEffect(() => {
    getRealm().then(realm => {
      const checklist = realm.checklist.find(
        ({_id}) => _id === route.params.id,
      );
      setData(checklist);
    });
  }, []);

  const Supervisor = () => {
    return data.had_supervision ? (
      <>
        <Title>Supervisor</Title>
        <Content>{data.to__name}</Content>
      </>
    ) : null;
  };

  return (
    <PageContainer>
      <Title>Farmer</Title>
      <Content>{data.from__name}</Content>

      <Title>Farm</Title>
      <Content>{data.farmer__name}</Content>

      <Title>Farm City</Title>
      <Content>{data.farmer__city}</Content>

      <Title>Checklist Type</Title>
      <Content>{data.type}</Content>

      <Title>Number of cows head</Title>
      <Content>{data.number_of_cows_head}</Content>

      <Title>Amount of milk produced</Title>
      <Content>{data.amount_of_milk_produced}</Content>

      <Title>Had Supervision</Title>
      <Content>{data.had_supervision ? 'Yes' : 'No'}</Content>

      {Supervisor()}

      <Title>Create in</Title>
      <Content>{data.created_at.toLocaleDateString('en-US')}</Content>

      <Title>Last Update</Title>
      <Content>{data.updated_at.toLocaleDateString('en-US')}</Content>
    </PageContainer>
  );
};

export default ChecklistView;
