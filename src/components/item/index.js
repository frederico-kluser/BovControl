import React from 'react';
import {ListItem} from '@rneui/themed';
import Container from './styled';

const Item = ({
  amount_of_milk_produced,
  _id,
  had_supervision,
  number_of_cows_head,
  to__name,
  type,
}) => (
  <Container>
    <ListItem key={_id} bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{type}</ListItem.Title>
        <ListItem.Subtitle>
          Number of cows head: {number_of_cows_head}
        </ListItem.Subtitle>
        <ListItem.Subtitle>
          Amount of milk produced: {amount_of_milk_produced}
        </ListItem.Subtitle>
        <ListItem.Subtitle>
          Had supervision: {had_supervision ? 'Yes' : 'No'}
        </ListItem.Subtitle>
        <ListItem.Subtitle>Supervision name: {to__name}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  </Container>
);

export default Item;
