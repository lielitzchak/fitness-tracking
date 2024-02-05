import { Login } from "../../Features/Login.components";
import { UserService } from "../../../service/User-service";
import { Register } from "../../Features/Register.component";
const LoginAndRegister = () => {
  return (
    <section className="LoginAndRegister">
      <article className="login">
        <Login onLogin={UserService.GetUserByEmail} />
      </article>
      <Register />
    </section>
  );
};

export default LoginAndRegister;
