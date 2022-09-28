import { DataProvider } from "./dataProvider";
import { ModalProvider } from "./modalProvider";

const Provider = ({ children }) => {
  return (
    <DataProvider>
      <ModalProvider>{children}</ModalProvider>
    </DataProvider>
  );
};

export default Provider;
