const basicURL: string = "http://localhost:1010";

let options: Object = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
  },
};

export const getRecipes = async (): Promise<any> => {
  try {
    return await fetch(`${basicURL}/recipes`, options)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
