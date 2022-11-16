const FarmerSchema = {
  name: 'Farmer',
  properties: {
    _id: 'int',
    name: 'string',
    farm_name: 'string',
    farm_city: 'string',
  },
  primaryKey: '_id',
};

export default FarmerSchema;
