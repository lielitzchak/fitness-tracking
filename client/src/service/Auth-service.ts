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
// ! this type need to be user
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
    return await fetch(`${basic_url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDate),
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};
export const GetUserById = async (id: string): Promise<any> => {
  try {
    return await fetch(`${basic_url}/user/${id}`)
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};
export const UpdateUser = async (user: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/user/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};
export const DeleteUser = async (id: number): Promise<any> => {
  try {
    return await fetch(`${basic_url}/user/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res: Response) => res.json())
      .catch((err: Response) => err);
  } catch (error) {
    console.log(error);
  }
};

//! fix this code snippet beacuse it is cant return a value that he's should be a promise
