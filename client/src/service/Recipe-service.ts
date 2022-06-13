import basic_url from "./DataForAll";

export const getRecipes = async (): Promise<any> => {
  try {
    return await fetch(`${basic_url}/recipe`)
      .then((res: Response) => res.json())
      .catch((err: Response) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export const getRecipeById = async (id: string): Promise<any> => {
  try {
    return await fetch(`${basic_url}/recipe/${id}`)
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};
// ! this type need to be recipe
export const PostRecipe = async (newRecipe: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err.json());
  } catch (error) {
    console.log(error);
  }
};
// ! this type need to be recipe
export const PutRecipe = async (id: string, newRecipe: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/recipe/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newRecipe),
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err.json());
  } catch (error) {
    console.log(error);
  }
};
export const DeleteRecipe = async (id: string): Promise<any> => {
  try {
    return await fetch(`${basic_url}/recipe/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err.json());
  } catch (error) {
    console.log(error);
  }
};
