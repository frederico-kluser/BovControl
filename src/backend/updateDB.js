const axios = require('axios');

const putChecklist = ({
  _id,
  type,
  amount_of_milk_produced,
  number_of_cows_head,
  had_supervision,
  farmer__name,
  farmer__city,
  from__name,
  to__name,
  location__latitude,
  location__longitude,
  created_at,
  updated_at,
}) => {
  axios
    .put('http://challenge-front-end.bovcontrol.com/v1/checkList', {
      id: _id,
      type,
      amount_of_milk_produced,
      number_of_cows_head,
      had_supervision,
      farmer: {
        name: farmer__name,
        city: farmer__city,
      },
      from: {
        name: from__name,
      },
      to: {
        name: to__name,
      },
      location: {
        latitude: location__latitude,
        longitude: location__longitude,
      },
      created_at: created_at,
      updated_at: updated_at,
    })
    .then(response => {
      console.log('updated response.data :', response.data);
    })
    .catch(e => {
      console.log('Error retrieving data on update', e);
    });
};

const postChecklist = checklist => {
  const {
    _id,
    type,
    amount_of_milk_produced,
    number_of_cows_head,
    had_supervision,
    farmer__name,
    farmer__city,
    from__name,
    to__name,
    location__latitude,
    location__longitude,
    created_at,
    updated_at,
  } = checklist;
  axios
    .post('http://challenge-front-end.bovcontrol.com/v1/checkList', {
      checklists: [
        {
          id: _id,
          type,
          amount_of_milk_produced,
          number_of_cows_head,
          had_supervision,
          farmer: {
            name: farmer__name,
            city: farmer__city,
          },
          from: {
            name: from__name,
          },
          to: {
            name: to__name,
          },
          location: {
            latitude: location__latitude,
            longitude: location__longitude,
          },
          created_at: created_at,
          updated_at: updated_at,
        },
      ],
    })
    .then(response => {
      console.log('posted response.data :', response.data);
    })
    .catch(e => {
      console.log('Error retrieving data on post', e);
      putChecklist(checklist);
    });
};

export const updateDB = checklists => {
  checklists.forEach(checklist => {
    postChecklist(checklist);
  });
};
