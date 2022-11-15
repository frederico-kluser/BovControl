import React from 'react';

export const StoreContext = React.createContext(null);

export const StoreProvider = ({children}) => {
  const [farmer, setFarmer] = React.useState(null);
  const [checklist, setChecklist] = React.useState(null);

  const value = {
    farmer,
    setFarmer,
    checklist,
    setChecklist,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
