import { useState } from "react";
import { GetLogin } from "../../service/Auth-service";

const Login = () => {
  const [userInfo, setUserInfo] = useState({});
  const [massage, setMassage] = useState("");
  let SaveDate = (event: any): void => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const click = (event: any) => {
    event.preventDefault();
    GetLogin(userInfo)
      .then((res) => {
        console.log(res.message);
        setMassage(res.message);
        console.log(massage);
      })
      .catch((err) => {
        setMassage(err);
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input
          type="email"
          onChange={(event) => SaveDate(event)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(event) => SaveDate(event)}
          placeholder="Password"
        />
        <button type="submit" onChange={(event) => click(event)}>
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;
