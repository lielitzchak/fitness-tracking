import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.component";
import Header from "../Components/Layout/Header/Header.component";
import Gym from "../Components/Pages/Gym/Gym.component";
import Home from "../Components/Pages/Home/Home.component";
import Page404 from "../Components/Pages/page404/Page404.component";
import Recipe from "../Components/Pages/Recipe/Recipe.component";
const RouteApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/gym" element={< />} /> */}
        <Route path="/gym" element={<Gym />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteApp;
