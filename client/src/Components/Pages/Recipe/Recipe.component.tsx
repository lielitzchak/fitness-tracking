import { useState, useEffect } from "react";
import { recipeService } from "../../../service/Recipe-service";

const Recipe = (dataUser: any): JSX.Element => {
  const [recipe, setRecipe]: any = useState({});
  let currentId: String = document.location.search.substring(4);

  useEffect((): any => {
    return recipeService
      .GetRecipeById(`${dataUser.id}`)
      .then((responseFromServer: Response) => {
        setRecipe(responseFromServer);
        console.log(recipe);
      })
      .catch((error: Response) => error);
  });
  return (
    <div>
      Candy: false Name: "pizza" NutritionalValues: protein: 10, carbs: 10,
      fat:10, _id: '626fea693dea3ea0a00aee11' Picture: "https://did.li/W2WfT"
      TimeToMake: "30 minutes" createdAt: "2022-05-02T14:27:53.551Z" updatedAt:
      "2022-05-02T14:27:53.551Z" vegan: true __v: 0 _id:
    </div>
  );
};
export default Recipe;
