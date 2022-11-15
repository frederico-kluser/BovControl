const ChecklistSchema = {
  name: 'Checklist',
  properties: {
    _id: 'int',
    type: 'string', // BPA, Antibiótico, BPF
    amount_of_milk_produced: 'int',
    farmer__name: 'string',
    farmer__city: 'string',
    from__name: 'string', // owner name ?
    to__name: 'string?', // supervisor name ?
    number_of_cows_head: 'int',
    had_supervision: {
      type: 'bool',
      default: false,
    },
    location__latitude: {
      type: 'double',
      default: 0,
    },
    location__longitude: {
      type: 'double',
      default: 0,
    },
    created_at: {
      type: 'date',
      default: new Date(),
    },
    updated_at: {
      type: 'date',
      default: new Date(),
    },
  },
  primaryKey: '_id',
};

export default ChecklistSchema;
