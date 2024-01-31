import { Link } from "react-router-dom";

const Header = () => {
  let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
  // let dropdownIsOpen = false;
  // if (!dropdowns.length) {
  //   dropdowns.forEach((dropdown) => {
  //     dropdown.addEventListener("click", (event: any) => {
  //       let target = document.querySelector(event.target.dataset.dropdown);
  //       console.log(target);
  //         if (target) {
  //           if (target.classList.contains("show")) {
  //             target.classList.remove("show");
  //             dropdownIsOpen = false;
  //           } else {
  //             target.classList.add("show");
  //             dropdownIsOpen = true;
  //           }
  //         }
  //     });
  //   });
  // }

  // window.addEventListener("mouseup", (event) => {
  //   if (dropdownIsOpen) {
  //     dropdowns.forEach((dropdownButton) => {
  //       let dropdown = document.querySelector(dropdownButton.dataset.dropdown);
  //       let targetIsDropdown = dropdown == event.target;

  //       if (dropdownButton == event.target) {
  //         return;
  //       }

  //       if (!targetIsDropdown && !dropdown.contains(event.target)) {
  //         dropdown.classList.remove("show");
  //       }
  //     });
  //   }
  // });

  // Open links in mobiles
  // function handleSmallScreens() {
  //   document.querySelector(".navbar-toggler").addEventListener("click", () => {
  //     let navbarMenu = document.querySelector(".navbar-menu");

  //     if (navbarMenu.style.display === "flex") {
  //       navbarMenu.style.display = "none";
  //       return;
  //     }

  //     navbarMenu.style.display = "flex";
  //   });
  // }

  // handleSmallScreens();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggler" data-toggle="open-navbar1">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#">
            <h4>
              Awesome<span>logo</span>
            </h4>
          </a>
        </div>

        <div className="navbar-menu" id="open-navbar1">
          <ul className="navbar-nav">
            <li className="active">
              <Link to={"/"}> Home</Link>
            </li>
            <li className="navbar-dropdown">
              <a
                href="#"
                className="dropdown-toggler"
                data-dropdown="my-dropdown-id"
              >
                Categories <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown" id="my-dropdown-id">
                <li>
                  <a href="#">Actions</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li className="separator"></li>
                <li>
                  <a href="#">Seprated link</a>
                </li>
                <li className="separator"></li>
                <li>
                  <a href="#">One more seprated link.</a>
                </li>
              </ul>
            </li>
            <li className="navbar-dropdown">
              <Link to={"Profile"}>
                 Profile <i className="fa fa-angle-down"></i>
              </Link>
              <ul className="dropdown" id="blog">
                <li>
                  <a href="#">Some category</a>
                </li>
                <li>
                  <a href="#">Some another category</a>
                </li>
                <li className="separator"></li>
                <li>
                  <a href="#">Seprated link</a>
                </li>
                <li className="separator"></li>
                <li>
                  <a href="#">One more seprated link.</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Signin</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
