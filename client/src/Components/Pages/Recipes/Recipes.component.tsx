import { useState, useEffect } from "react";
import { getRecipes } from "../../../service/Recipe-service";
import { Link } from "react-router-dom";
// import Recipe from "../Recipe/Recipe.component";

// ! need to fix the minus button because it is not working like i want to. it writes minute wen no number is written.
const Recipes = (): JSX.Element => {
  const [recipes, setRecipes]: any = useState([]);
  useEffect((): void => {
    try {
      getRecipes().then((res) => {
        setRecipes(res);
        console.log(res);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="Recipes">
      <Link to={"/add-new-recipe"}>
        <img
          className="add-recipe"
          src="https://did.li/uQLNf"
          alt="add recipe"
        />
      </Link>
      {recipes.map((recipe: any) => {
        return (
          <div className="Recipes-container" key={recipe._id}>
            <div className="container">
              <img src={recipe.Picture} alt={recipe.Name} />
              <div className="container__text">
                <h1>title:{recipe.Name}</h1>
                <p>
                  If you're fan of caramel cake, then you'll love our Caramel
                  Cake Pancakes. We Complete these over-the-top pancakes with
                  Caramel Syrup.
                </p>
                <div className="container__text__timing">
                  <div className="container__text__timing_time">
                    <h2>Hands-on Time</h2>
                    <p>
                      {recipe.TimeToCook}
                      {recipe.TimeToCook > 1 ? "minutes" : "minute"}
                    </p>
                  </div>
                  <div className="container__text__timing_time">
                    <h2>Total Time</h2>
                    <p>
                      {recipe.TimeToCook}
                      {recipe.TimeToCook > 1 ? "minutes" : "minute"}
                    </p>
                  </div>
                </div>
                <button className="btn">
                  view recipe <i className="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Recipes;
