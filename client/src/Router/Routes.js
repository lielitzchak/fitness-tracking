import Home from "../Components/Pages/Home/Home.component";
import AddRecipe from "../Components/Pages/AddRecipe/AddRecipe.component";
import AddReport from "../Components/Pages/AddReport/AddReport.component";
import Food from "../Components/Pages/Food/Food.component";
import GenericRecipe from "../Components/Pages/Recipe/Recipe.component";
import TrainingProgram from "../Components/Pages/TrainingProgram/TrainingProgram.component";
import LoginAndRegister from "../Components/Pages/LoginAndRegister/LoginAndRegister.component";
import Page404 from "../Components/Pages/page404/Page404.component";
import Recipes from "../Components/Pages/Recipes/Recipes.component";
import ReportComponent from "../Components/Pages/Report/Report.component";
import Profile from "../Components/Pages/Profile/Profile.component";
import AddTrainingProgram from "../Components/Pages/AddTrainingProgram/AddTrainingProgram.component";

const ROUTES = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <LoginAndRegister /> },
  { path: "/training-program", element: <TrainingProgram /> },
  { path: "/Food", element: <Food /> },
  { path: "/report", element: <ReportComponent /> },
  { path: "/recipe/:id", element: <GenericRecipe /> },
  { path: "/recipes", element: <Recipes /> },
  //  /* //! Private Routes */
  { path: "/profile/:name", element: <Profile /> },
  { path: "report/add-report", element: <AddReport /> },
  { path: "/add-new-recipe", element: <AddRecipe /> },
  { path: "/add-new-Training-Program", element: <AddTrainingProgram /> },
  { path: "*", element: <Page404 /> },
];
export default ROUTES;
