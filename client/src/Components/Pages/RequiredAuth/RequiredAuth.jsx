import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { authContext } from "../../../Context/AuthProvider.component";

export default function RequiredAuth() {
  const { auth } = useContext(authContext);
  return auth.email ? <Outlet /> : <Link to="Login" />;
}
