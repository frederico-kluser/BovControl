import React, {createContext, useState} from 'react';
import {makeShowModalFunc, INITIAL_MODAL_VALUE} from '../core/modal';

export const StoreContext = createContext(null);

export const StoreProvider = ({children}) => {
  const [farmer, setFarmer] = useState(null);
  const [checklist, setChecklist] = useState(null);

  const [modal, setModal] = useState({
    ...INITIAL_MODAL_VALUE,
    onBackdropPress: () => {
      setModal({
        ...modal,
        ...INITIAL_MODAL_VALUE,
      });
    },
  });

  const value = {
    farmer,
    setFarmer,
    checklist,
    setChecklist,
    modal,
    showModal: makeShowModalFunc(modal, setModal),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
