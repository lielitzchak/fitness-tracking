import { useState, useEffect } from "react";
import { recipeService } from "../../../service/Recipe-service";
import { Link } from "react-router-dom";

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
    <div className="RecipesComponent">
      {/* <Link to={"/add-new-recipe"}>
        <img
          className="add-recipe"
          src="https://did.li/uQLNf"
          alt="add recipe"
        />
      </Link> */}

      <div className="Recipes-data">
        {recipes.map((recipe: any) => {
          return (
            <Link
              to={`/recipe/${recipe._id}`}
              key={recipe._id}
              className="main"
            >
              {localStorage.setItem(recipe._id, JSON.stringify(recipe))}
              <ul className="cards">
                <li className="cards_item">
                  <div className="card">
                    <div className="card_image">
                      <img
                        src={recipe.Picture}
                        alt="mixed vegetable salad in a mason jar. "
                      />
                    </div>
                    <div className="card_content">
                      <h2 className="card_title">{recipe.Name}</h2>
                      <div className="card_text">
                        <p> Time To Cook:  {recipe.TimeToCook > 60 ? "minuets" : "hours"}</p>
                        <p>Candy: {recipe.Candy ? "Candy" : "not a Candy"}</p>
                        <p> cosher: {recipe.IsMilk ? "milk" : "meat"}</p>
                        <p> Summary: {recipe.Summary}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Recipes;
