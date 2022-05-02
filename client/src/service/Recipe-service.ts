import basic_url from "./DataForAll";

// let options: Object = {
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//   },
// };

export const getRecipes = async (): Promise<any> => {
  try {
    return await fetch(`${basic_url}/recipe`)
      .then((res: Response) => res.json())
      .catch((err: Response) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
