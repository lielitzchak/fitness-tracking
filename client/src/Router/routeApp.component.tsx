import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.component";
import Header from "../Components/Layout/Header/Header.component";
import AddRecipe from "../Components/Pages/AddRecipe/AddRecipe.component";
import AddReport  from "../Components/Pages/AddReport/AddReport.component";
import Food from "../Components/Pages/Food/Food.component";
import GenericRecipe from "../Components/Pages/GenericRecipe/GenericRecipe.component";
import Gym from "../Components/Pages/Gym/Gym.component";
import Home from "../Components/Pages/Home/Home.component";
import Page404 from "../Components/Pages/page404/Page404.component";
import Recipe from "../Components/Pages/Recipe/Recipe.component";
import Recipes from "../Components/Pages/Recipes/Recipes.component";
import Report from "../Components/Pages/Report/Report.component";
const RouteApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/report" element={<Report />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/add-new-recipe" element={<AddRecipe />} />
        <Route path="report/add-report" element={<AddReport />} />
        <Route path="/recipe/:id" element={<GenericRecipe />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteApp;

// ! exact in new react