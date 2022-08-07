import BASIC_URL from "./DataForAll";

export const AuthService = {
  GetRegister: async (): Promise<any> => {
    return await fetch(`${BASIC_URL}/register`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  PostRegister: async (newRegister: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRegister),
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  GetLogin: async (userDate: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDate),
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  GetUserById: async (id: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/user/${id}`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  UpdateUser: async (user: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/user/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  DeleteUser: async (userId: number): Promise<any> => {
    return await fetch(`${BASIC_URL}/user/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
};
