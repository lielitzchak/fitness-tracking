import basic_url from "./DataForAll";

const getAllGym = async (): Promise<any> => {
  try {
    // let options: Object = {
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    //   },
    // };
    return await fetch(`${basic_url}/training`)
      .then((res: Response) => res.json())
      .catch((err: Response) => console.log(err));
  } catch (error) {
    console.log(error);
  }
};

export default getAllGym;
