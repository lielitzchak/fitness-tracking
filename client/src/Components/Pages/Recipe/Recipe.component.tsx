import { useState, useEffect } from "react";
import { getRecipes } from "../../../service/Recipe-service";

const Recipe = (): JSX.Element => {
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
    <div>
      <div className="wrapper">
        {recipes.map((recipe: any) => {
          return (
            <div key={recipe._id}>
              <div className="errortext">name: {recipe.Name}</div>
              <div className="error">
                Time To Make:
                {recipe.TimeToMake > 1
                  ? recipe.TimeToMake + " minutes"
                  : recipe.TimeToMake + " minute"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recipe;

// vegan: Boolean,
// NutritionalValues: NutritionalValuesSchema,
// Candy: Boolean,
// Picture: String,
// isMilk: Boolean,
