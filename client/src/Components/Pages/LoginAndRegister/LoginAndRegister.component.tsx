import Login from "../../Features/Login.components";
// import Register from "../../Features/Register.component";

const LoginAndRegister = () => {
  return (
    <section className="LoginAndRegister">
      <article className="login">
        <Login />
      </article>
      {/* <article className="register">
        <Register />
      </article> */}
    </section>
  );
};

export default LoginAndRegister;
