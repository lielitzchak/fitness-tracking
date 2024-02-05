import React, { useState } from "react";
import { UserService } from "../../service/User-service";

interface LoginProps {
  onLogin: (Email: string, Password: string) => void;
}
const Login: React.FC<LoginProps> = () => {
  const [formData, setFormData] = useState({
    UserName: "",
    Password: "",
    Email: "",
    Image: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    UserService.GetUserByEmail(formData.Email, formData.Password)
      .then((response) => {
        console.log(response);
        return;
      })
      .catch((err) => {
        setError(err);
        console.log(error);
      });
  };

  return (
    <div className="LoginComponent">
      <div className="container">
        <div className="screen">
          <h2 className="login__content">Login</h2>
          <div className="screen__content">
            <form className="login">
              <div className="login__field">
                <i className="login__icon fas fa-user"></i>
                <input
                  type="Email"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="login__input"
                  required
                />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <input
                  type="Password"
                  placeholder="Password"
                  className="login__input"
                  id="Password"
                  name="Password"
                  value={formData.Password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                onClick={(event) => handleSubmit(event)}
                className="button login__submit"
              >
                <span className="button__text">Log In Now</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div className="screen__background">
            <span className="screen__background__shape screen__background__shape4"></span>
            <span className="screen__background__shape screen__background__shape3"></span>
            <span className="screen__background__shape screen__background__shape2"></span>
            <span className="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
