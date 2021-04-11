import React, { createContext, useReducer } from 'react';
import Reducer from '../Reducer/Reducer';

const initialState = {
  todo: { list: [], item: {} },
};

export const Store = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;
