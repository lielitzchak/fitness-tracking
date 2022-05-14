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
      <div className="Recipes-data">
        {recipes.map((recipe: any) => {
          return (
            <div className="Recipes-container" key={recipe._id}>
              <article className="recipe">
                <div className="pizza-box">
                  <img src={recipe.Picture} alt={recipe.Name} />
                </div>
                <div className="recipe-content">
                  <p className="recipe-tags">
                    <span className="recipe-tag">
                      {recipe.isMilk ? "Milk" : "meat"}
                    </span>
                    <span className="recipe-tag">
                      {recipe.Vegan ? "vegan" : "not vegan"}
                    </span>
                  </p>

                  <h1 className="recipe-title">{recipe.Name}</h1>

                  <p className="recipe-desc">{recipe.Summary}</p>
                  <button className="recipe-save" type="button">
                    see all recipe
                  </button>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
