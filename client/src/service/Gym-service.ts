import basic_url from "./DataForAll";

export const getAllGym = async (): Promise<any> => {
  try {
    return await fetch(`${basic_url}/gym`)
      .then((response: Response) => response.json())
      .catch((error: Response) => error);
  } catch (error) {
    console.log(error);
  }
};
export const getGymById = async (id: string): Promise<any> => {
  try {
    return await fetch(`${basic_url}/gym/${id}`)
      .then((response: Response) => response.json())
      .catch((error: Response) => error);
  } catch (error) {
    console.log(error);
  }
};
// ! this type need to be gym
export const PostGym = async (newGym: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/gym`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newGym),
    })
      .then((response: Response) => response.json())
      .catch((error: Response) => error.json());
  } catch (error) {
    console.log(error);
  }
};
// ! this type need to be gym
export const PutGym = async (id: string, newGym: any): Promise<any> => {
  try {
    return await fetch(`${basic_url}/gym/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newGym),
    })
      .then((response: Response) => response.json())
      .catch((error: Response) => error.json());
  } catch (error) {
    console.log(error);
  }
};
export const DeleteGym = async (id: string): Promise<any> => {
  try {
    return await fetch(`${basic_url}/gym/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((response: Response) => response.json())
      .catch((error: Response) => error.json());
  } catch (error) {
    console.log(error);
  }
};
