import React, { useContext, createContext, useState } from "react";

interface IContextProviderProps {
  children: React.ReactNode;
}

interface IDataContext {
  1: number;
  30: number;
  60: number;
  90: number;
}

type IDataProps = {
  dataResult: IDataContext | null;
  setDataResult: React.Dispatch<React.SetStateAction<IDataContext | null>>;
};

export const DataContext = createContext<IDataProps | null>(null);

export const DataProvider = ({ children }: IContextProviderProps) => {
  const [dataResult, setDataResult] = useState<IDataContext | null>(null);

  return (
    <DataContext.Provider value={{ dataResult, setDataResult }}>
      {children}
    </DataContext.Provider>
  );
};
