import { useState } from "react";
import { recipeService } from "../../../service/Recipe-service";

const AddRecipe = (): JSX.Element => {
  const [Recipe, setRecipe] = useState({ Candy: false, vegan: false });
  const [messageFromServer, setMessageFromServer] = useState("");

  const SaveValueInRecipeState = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    setRecipe({ ...Recipe, [event.target.name]: event.target.value });
    console.log(Recipe);
  };
  const HandleOnChange = (event: any): void => {
    console.log(event.target.name);
    if (event.target.value === "on")
      setRecipe({ ...Recipe, [event.target.name]: true });
    setRecipe({ ...Recipe, [event.target.name]: false });
    console.log(Recipe);
  };
  const ClickOnSave = (event: any) => {
    event.preventDefault();
    recipeService
      .PostRecipe(Recipe)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setMessageFromServer(err.Message);
        console.log(err);
      });
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <h1>add new recipe</h1>
          <form>
            <div className="name">
              <div>
                <label htmlFor="">recipe name</label>
                <input
                  type="text"
                  name="Name"
                  placeholder="recipe name"
                  required
                  onChange={(event) => SaveValueInRecipeState(event)}
                />
              </div>
              <div>
                <label htmlFor="">Summary</label>
                <input
                  type="text"
                  name="Summary"
                  placeholder="Summary"
                  required
                  onChange={(event) => SaveValueInRecipeState(event)}
                />
              </div>
            </div>
            <div className="street">
              <label htmlFor="">Time To Cook</label>
              <input
                type="number"
                name="TimeToCook"
                placeholder="time to cook"
              />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="">Is vegan?</label>
                <input
                  type="checkbox"
                  name="vegan"
                  // checked={Recipe.vegan}
                  onChange={(event) => HandleOnChange(event)}
                />
              </div>
              <div>
                <label htmlFor="">Is Candy?</label>
                <input
                  type="checkbox"
                  name="Candy"
                  //  checked={Recipe.Candy}
                  onChange={(event) => HandleOnChange(event)}
                />
              </div>
              <div>
                <label htmlFor="">Picture</label>
                <input
                  type="url"
                  name="Picture"
                  onChange={(event) => SaveValueInRecipeState(event)}
                />
              </div>
              <div>
                <label htmlFor="zip"> HowToMake</label>
                <input
                  type="text"
                  name="HowToMake"
                  onChange={(event) => SaveValueInRecipeState(event)}
                />
              </div>
            </div>
            <div className="btns">
              <button onClick={(event) => ClickOnSave(event)}>save!</button>
            </div>
          </form>
        </div>
      </div>
      {messageFromServer}
    </>
  );
};
export default AddRecipe;
