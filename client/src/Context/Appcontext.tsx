import React, { useState } from "react";
export const AppContext: any = React.createContext<any>({});
const AppProvider = (props: any): JSX.Element => {
  const [userInfo, setUserInfo]: any = useState();
  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
