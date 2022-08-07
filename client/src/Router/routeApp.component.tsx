import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.component";
import Header from "../Components/Layout/Header/Header.component";
import AddRecipe from "../Components/Pages/AddRecipe/AddRecipe.component";
import AddReport from "../Components/Pages/AddReport/AddReport.component";
import Food from "../Components/Pages/Food/Food.component";
import GenericRecipe from "../Components/Pages/GenericRecipe/GenericRecipe.component";
import TrainingProgram from "../Components/Pages/TrainingProgram/TrainingProgram.component";
import Home from "../Components/Pages/Home/Home.component";
import LoginAndRegister from "../Components/Pages/LoginAndRegister/LoginAndRegister.component";
import Page404 from "../Components/Pages/page404/Page404.component";
import Recipes from "../Components/Pages/Recipes/Recipes.component";
import ReportComponent from "../Components/Pages/Report/Report.component";
import Profile from "../Components/Pages/Profile/Profile.component";
import AddTrainingProgram from "../Components/Pages/AddTrainingProgram/AddTrainingProgram.component";

const RouteApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/** //! Public Routes **/}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<LoginAndRegister />} />
        <Route path="/training-program" element={<TrainingProgram />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/report" element={<ReportComponent />} />
        <Route path="/recipe/:id" element={<GenericRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        {/* //! Private Routes */}
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="report/add-report" element={<AddReport />} />
        <Route path="/add-new-recipe" element={<AddRecipe />} />
        <Route
          path="/add-new-Training-Program"
          element={<AddTrainingProgram />}
        />

        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteApp;
