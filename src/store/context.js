import React from 'react';

export const StoreContext = React.createContext(null);

export const StoreProvider = ({children}) => {
  return <StoreContext.Provider value={{}}>{children}</StoreContext.Provider>;
};
