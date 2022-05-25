import { useState } from "react";
import { PostRegister } from "../../service/Auth-service";

const Register = (): JSX.Element => {
  const [newRegister, setRegister] = useState({});
  const [massage, setMassage] = useState("");
  let ff = (event: any): void => {
    setRegister({ ...newRegister, [event.target.name]: event.target.value });
  };

  const click = (event: any) => {
    event.preventDefault();
    PostRegister(newRegister)
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
    <>
      <form>
        <input
          name="UserName"
          type="text"
          placeholder="UserName"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="Password"
          type="password"
          placeholder="Password"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="Email"
          type="email"
          placeholder="Email"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="Image"
          type="file"
          placeholder="Image"
          onChange={(event) => ff(event)}
        />
        <br />
        <button type="submit" onClick={(event) => click(event)}>
          Register
        </button>
      </form>
      <p>{massage}</p>
    </>
  );
};

export default Register;
