import React, { createContext, useContext, useState } from 'react';

const SortingContext = createContext();

export const SortingProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState("");

  return (
    <SortingContext.Provider value={{ sortBy, setSortBy }}>
      {children}
    </SortingContext.Provider>
  );
};

export const useSorting = () => {
  return useContext(SortingContext);
};
