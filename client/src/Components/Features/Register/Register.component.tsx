import { useState } from "react";
import { UserService } from "../../../service/User-service";

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
    <div className="registerComponent">
      <div className="container_register_and_Register">
        <div className="screen">
          <div className="screen__content">
            <h2 className="register__content">Register</h2>
            <form className="register">
              <div className="register__field">
                <i className="register__icon fas fa-user"></i>
                <input
                  type="Email"
                  placeholder="Email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={(event) => SaveUserData(event)}
                  className="register__input"
                  required
                />
              </div>
              <div className="register__field">
                <i className="register__icon fas fa-user"></i>
                <input
                  type="url"
                  alt="description of image"
                  placeholder="Profile Picture"
                  id="Image"
                  name="Image"
                  className="register__input"
                  value={formData.UserName}
                  onChange={(event) => SaveUserData(event)}
                />
              </div>
              <div className="register__field">
                <i className="register__icon fas fa-user"></i>
                <input
                  type="Email"
                  id="Email"
                  name="Email"
                  placeholder="Email"
                  className="register__input"
                  onChange={(event) => SaveUserData(event)}
                  required
                />
              </div>
              <div className="register__field">
                <i className="register__icon fas fa-user"></i>
                <input
                  type="Password"
                  id="Password"
                  placeholder="Password"
                  name="Password"
                  className="register__input"
                  onChange={(event) => SaveUserData(event)}
                  required
                />
              </div>
              <button onClick={RegisterDB} className="button register__submit">
                <span className="button__text">Register</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              {error && <div style={{ color: "red" }}>{error}</div>}
            </form>
            
          </div><div className="screen__background">
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

export { Register };
