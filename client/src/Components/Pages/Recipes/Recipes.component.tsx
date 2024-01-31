import { useState, useEffect } from "react";
import { recipeService } from "../../../service/Recipe-service";
import { Link } from "react-router-dom";
import { json } from "express";

const Recipes = (): JSX.Element => {
  let [recipes, setRecipes]: any = useState([]);
  useEffect((): void => {
    recipeService
      .GetRecipes()
      .then((responseFromServer: any) => {
        setRecipes(responseFromServer);
      })
      .catch((error) => error);
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
            <Link to={`/recipe/${recipe._id}`} key={recipe._id}>
              {localStorage.setItem(recipe._id, JSON.stringify(recipe))}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
