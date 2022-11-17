import React from 'react';

import PageContainer from '../../components/page-container';

import {Button, Input} from '@rneui/themed';

const Checklist = ({navigation}) => (
  <PageContainer>
    <Input placeholder="Name" />
    <Input placeholder="Farm Name" />
    <Input placeholder="Farm City" />
    <Button
      title="Register"
      loading={false}
      disabled
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{name: 'BovControl'}],
        });
      }}
    />
  </PageContainer>
);

export default Checklist;
