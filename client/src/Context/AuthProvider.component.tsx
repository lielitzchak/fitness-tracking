import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const authContext: any = React.createContext<any>({});

const AuthProvider = ({ children }: any) => {
  let [auth, setAuth]: any = useState({});
  let [loading, setLoading]: any = useState(false);
  let [userInfo, setUserInfo]: any = useState({});

  useEffect(() => {
    if (localStorage.jwtToken) {
      const token: any = localStorage.getItem("jwtToken");
      let tokenDecoded: unknown = jwt_decode(token);
      setAuth(tokenDecoded);
    }
  }, []);

  return (
    <authContext.Provider
      value={{ userInfo, setUserInfo, loading, setLoading }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
