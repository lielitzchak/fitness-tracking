import BASIC_URL from "./DataForAll";
export const recipeService = {
  GetRecipes: async (): Promise<any> => {
    return await fetch(`${BASIC_URL}/recipe`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  GetRecipeById: async (recipeId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/recipe/${recipeId}`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  PostRecipe: async (newRecipe: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newRecipe),
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  PutRecipe: async (recipeId: string, newRecipe: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/recipe/${recipeId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newRecipe),
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  DeleteRecipe: async (recipeId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/recipe/${recipeId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
};
