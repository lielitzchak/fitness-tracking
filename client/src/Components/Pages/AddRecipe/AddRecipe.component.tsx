import { useState } from "react";
import { PostRecipe } from "../../../service/Recipe-service";

const AddRecipe = (): JSX.Element => {
  const [recipe, setRecipe] = useState({});
  const [min, setMin] = useState("");
  const [messageFromServer, setMessageFromServer] = useState("");

  const changMinByValue = (event: any) => {
    event.preventDefault();
    event.target.value > 1 ? setMin("minutes") : setMin("minute");
    if (event.target.value === "") {
      setMin("");
    }
    console.log({ ...recipe, [event.target.name]: event.target.value });
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };

  const saveValue = (event: any) => {
    event.preventDefault();
    event.target.value === "on"
      ? setRecipe({ ...recipe, [event.target.name]: true })
      : setRecipe({ ...recipe, [event.target.name]: false });
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
    console.log({ ...recipe, [event.target.name]: event.target.value });
  };

  const clickOnSave = (event: any) => {
    event.preventDefault();
    // setRecipe(recipe);
    PostRecipe(recipe)
      .then((response: any) => setMessageFromServer(response.message))
      .catch((err: any) => setMessageFromServer(err));
    console.log(recipe);
  };


  return (
    <>
      <form>
        <input
          type="text"
          name="Name"
          placeholder="recipe name"
          required
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
      {messageFromServer}
    </>
  );
};

export default AddRecipe;
