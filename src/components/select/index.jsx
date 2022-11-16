import React from 'react';

import { Text } from '@rneui/base';
import { Picker } from "@react-native-picker/picker";

const Select = ({ text, items, selectedValue, setSelectedValue }) => {
  const [pickerItems, setPickerItems] = React.useState([]);

  React.useEffect(() => {
    setPickerItems(items.map(({ label, value }) => (
      <Picker.Item key={label} label={label} value={value} />
    )));
  }, [items]);

  return (
    <>
      <Text>{ text }</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        { pickerItems }
      </Picker>
    </>
  );
};

export default Select;
