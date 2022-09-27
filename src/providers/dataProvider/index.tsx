import React, { useContext, createContext, useState } from "react";

type IContextProviderProps = {
  children: React.ReactNode;
};

export type IData = {
  1: number;
  15: number;
  30: number;
  60: number;
  90: number;
  120: number;
  150: number;
  180: number;
  210: number;
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
