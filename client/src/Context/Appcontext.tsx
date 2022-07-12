import React, { useState } from "react";
export const AppContext: any = React.createContext<any>({});

const AppProvider = ({ children }: any): JSX.Element => {
  let [userInfo, setUserInfo]: any = useState({});

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
