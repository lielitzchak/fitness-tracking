import React, { useState } from "react";
import { UserService } from "../../service/User-service";

interface LoginProps {
  onLogin: (Email: string, Password: string) => void;
}

interface RegisterProps {
  onRegister: (
    UserName: String,
    Email: string,
    Password: string,
    Image: string
  ) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
    Email: "",
    Image: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const userInfo = (event: any) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { Email, Password } = formData;
    if (!Email || !Password) {
      setError("Please provide both Email and Password.");
      return;
    }
    onLogin(Email, Password);
    setFormData({ UserName: "", Email: "", Password: "", Image: "" });
  };
  let something = () => {
    UserService.GetUserByEmail("liel@gmail.com", "0547080093")
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response + " error");
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Password">Password:</label>
          <input
            type="Password"
            placeholder="Password"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            placeholder="Email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            placeholder="Email"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            required
          />
        </div>
        <button onClick={something} type="submit">
          Login
        </button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

const Register: any = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
    Email: "",
    Image: "",
  });
  const [error, setError] = useState("");
  // !good
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
          <label htmlFor="Name">name:</label>
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

export { Login, Register };
