import { useState } from "react";
import Login from "../../Features/Login.components";
import Register from "../../Features/Register.component";

const LoginAndRegister = () => {
  const [userLogin, setUserLogin] = useState({});
  const saveData = (event: any) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };
  const login = () => {
    console.log(userLogin);
  };
  return (
    <section className="LoginAndRegister">
      <article className="login">
        <Login />
      </article>
      <article className="register">
        <Register />
      </article>
    </section>
  );
};

export default LoginAndRegister;
