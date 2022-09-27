import { DataProvider } from "./dataProvider";

interface IContextProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: IContextProviderProps) => {
  return <DataProvider>{children}</DataProvider>;
};

export default Provider;
