import basic_url from "./DataForAll";

export const GetRegister = async (): Promise<any> => {
  try {
    return await fetch(`${basic_url}/register`)
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};
export const PostRegister = async (newRegister: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegister),
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err.json());
  } catch (error) {
    console.log(error);
  }
};
export const GetLogin = async (userDate: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/auth/login`)
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};
