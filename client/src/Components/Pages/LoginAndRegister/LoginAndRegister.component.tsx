import { Login } from "../../Features/Login/Login.components";
import { UserService } from "../../../service/User-service";
import { Register } from "../../Features/Register/Register.component";
const LoginAndRegister = () => {
  return (
    <section className="LoginAndRegister">
      <article className="login">
        <Login onLogin={UserService.GetAllUsers} />
      </article>
      <Register />
    </section>
  );
};

export default LoginAndRegister;
