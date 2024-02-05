import  { useState } from "react";
import { UserService } from "../../service/User-service";

const Register: any = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
    Email: "",
    Image: "",
  });
  const [error, setError] = useState("");
  const SaveUserData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  let RegisterDB = (event: any) => {
    event.preventDefault();
    UserService.CreateUser(formData)
      .then((response) => {
        console.log(response);
      })
      .catch((er) => {
        setError(er);
        console.log(er);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            id="UserName"
            name="UserName"
            value={formData.UserName}
            onChange={(event) => SaveUserData(event)}
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            id="Email"
            name="Email"
            placeholder="Email"
            onChange={(event) => SaveUserData(event)}
            required
          />
        </div>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="Password"
            id="Password"
            name="Password"
            onChange={(event) => SaveUserData(event)}
            required
          />
        </div>
        <button onClick={RegisterDB} type="submit">
          Register
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export { Register };
