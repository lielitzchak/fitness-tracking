import { useState } from "react";
const AddRecipe = (): JSX.Element => {
  const [recipe, setRecipe] = useState({});

  const AddToState = (event: any) => {
    event.preventDefault();
    setRecipe({ [event.target.name]: event.target.value });
    console.log(recipe);
  };

  const addNewKey = (event: any) => {
    setRecipe({
      ...recipe,
      // [event.target.name]: event.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="recipeName">Recipe Name</label>
        <input
          name="recipeName"
          onChange={(event: any) => addNewKey(event)}
          type="text"
        />
      </div>
      <button
        onClick={(event: any) => {
          AddToState(event);
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AddRecipe;
