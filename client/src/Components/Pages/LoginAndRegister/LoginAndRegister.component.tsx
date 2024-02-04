import { Login, Register } from "../../Features/Login.components";
import { UserService } from "../../../service/User-service";
const LoginAndRegister = () => {
  return (
    <section className="LoginAndRegister">
      <article className="login">
        {/* <Login onLogin={UserService.GetUserByEmail} /> */}
      </article>

      <Register onRegister={UserService.CreateUser} />
    </section>
  );
};

export default LoginAndRegister;
