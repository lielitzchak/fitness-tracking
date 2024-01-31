import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.component";
import Header from "../Components/Layout/Header/Header.component";
import ROUTES from "./Routes";
const RouteApp = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        {ROUTES.map((route: any) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};
export default RouteApp;
