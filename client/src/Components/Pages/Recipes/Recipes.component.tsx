import { useState, useEffect } from "react";
import { getRecipes } from "../../../service/Recipe-service";
import { Link } from "react-router-dom";
// import Recipe from "../Recipe/Recipe.component";

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
    <div className="wrapper">
      <Link to={"/add-new-recipe"}>
        <h1>add recipe</h1>
      </Link>
      {recipes.map((recipe: any) => {
        return (
          <div key={recipe._id}>
            <Link to={`${recipe._id}`}>
              <h1>{recipe.name}</h1>
              <div className="recipes">
                <div>
                  <h3 className="recipeTitle">title: {recipe.Name}</h3>
                  <h3 className="">
                    Time To Make:
                    {recipe.TimeToMake > 1
                      ? recipe.TimeToMake + " minutes"
                      : recipe.TimeToMake + " minute"}
                  </h3>
                </div>
                <img src={recipe.Picture} alt={recipe.Name} />
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Recipes;

// vegan: Boolean,
// NutritionalValues: NutritionalValuesSchema,
// Candy: Boolean,
// Picture: String,
// isMilk: Boolean,
