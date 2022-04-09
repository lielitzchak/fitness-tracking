import { createContext } from "react";
export const AppContextProvider = createContext();
const AppProvider = ({ children }) => {
  return (
    <AppContextProvider.Provider value={""}>
      {children}
    </AppContextProvider.Provider>
  );
};

export default AppProvider;
