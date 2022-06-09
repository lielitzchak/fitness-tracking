import React, { useState, useEffect } from "react";
import { GetUserById } from "../service/User-service";
export const AppContext: any = React.createContext<any>({});

const AppProvider = (props: any): JSX.Element => {
  let [userInfo, setUserInfo]: any = useState({});

  useEffect((): any => {
    try {
      return GetUserById("628de680fd1d48a91b4abcc2")
        .then((res: any) => {
          setUserInfo(res);
        })
        .catch((error: any) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
