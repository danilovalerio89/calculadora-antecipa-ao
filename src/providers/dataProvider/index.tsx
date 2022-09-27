import React, { useContext, createContext, useState } from "react";

type IContextProviderProps = {
  children: React.ReactNode;
};

type IData = {
  1: number;
  30: number;
  60: number;
  90: number;
};

type DataContextType = {
  data: IData | null;
  setData: React.Dispatch<React.SetStateAction<IData | null>>;
};

export const DataContext = createContext({} as DataContextType);

export const DataProvider = ({ children }: IContextProviderProps) => {
  const [data, setData] = useState<IData | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
