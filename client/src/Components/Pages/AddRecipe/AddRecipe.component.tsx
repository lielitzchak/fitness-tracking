import { useState } from "react";
import { PostRecipe } from "../../../service/Recipe-service";

const AddRecipe = (): JSX.Element => {
  const [recipe, setRecipe] = useState({});
  const [min, setMin] = useState("");

  const changMinByValue = (event: any) => {
    event.preventDefault();
    event.target.value > 1 ? setMin("minutes") : setMin("minute");
    console.log({ ...recipe, [event.target.name]: event.target.value });
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const saveValue = (event: any) => {
    event.preventDefault();
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    console.log({ ...recipe, [event.target.name]: event.target.value });
  };

  const clickOnSave = (event: any) => {
    event.preventDefault();
    setRecipe(recipe);
    PostRecipe(recipe)
      .then((response: any) => console.log(response))
      .catch((err: any) => console.log(err));
    console.log(recipe);
  };

  //   NutritionalValues: NutritionalValuesSchema,
  //   Picture: String,
  //   isMilk: Boolean,
  //   HowToMake: String,
  return (
    <form>
      <input
        type="text"
        name="Name"
        placeholder="recipe name"
        onChange={(event) => saveValue(event)}
      />
      <br />
      <input
        type="number"
        name="TimeToCook"
        placeholder="time to cook"
        onChange={(event) => changMinByValue(event)}
      />
      <label>{min}</label>
      <br />
      <label htmlFor="vegan">Is vegan?</label>
      <input
        type="checkbox"
        name="vegan"
        placeholder="vegan"
        onChange={(event) => changMinByValue(event)}
      />
      <br />
      <label htmlFor="Candy">Is Candy?</label>
      <input
        type="checkbox"
        name="Candy"
        placeholder="time to cook"
        onChange={(event) => changMinByValue(event)}
      />
      <br />
      <label htmlFor="isMilk">Is Milk?</label>
      <input
        type="checkbox"
        name="isMilk"
        placeholder="isMilk"
        onChange={(event) => changMinByValue(event)}
      />
      <br />
      <input
        type="url"
        name="Picture"
        placeholder="url for Picture"
        onChange={(event) => changMinByValue(event)}
      />
      <br />
      <br />
      <button onClick={(event) => clickOnSave(event)}>save!</button>
    </form>
  );
};

export default AddRecipe;
