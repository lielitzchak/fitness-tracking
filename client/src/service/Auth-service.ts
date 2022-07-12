import BASIC_URL from "./DataForAll";

export const AuthService = {
  GetRegister: async (): Promise<any> => {
    return await fetch(`${BASIC_URL}/register`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error);
  },
  PostRegister: async (newRegister: any): Promise<any> => {
    try {
      return await fetch(`${BASIC_URL}/auth/register`, {
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
  },
  GetLogin: async (userDate: any): Promise<any> => {
    try {
      return await fetch(`${BASIC_URL}/auth/login`, {
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
  },
  GetUserById: async (id: string): Promise<any> => {
    try {
      return await fetch(`${BASIC_URL}/user/${id}`)
        .then((res: Response) => res.json())
        .catch((err: Response) => err);
    } catch (error) {
      console.log(error);
    }
  },
  UpdateUser: async (user: any): Promise<any> => {
    try {
      return await fetch(`${BASIC_URL}/user/${user.id}`, {
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
  },
  DeleteUser: async (userId: number): Promise<any> => {
    try {
      return await fetch(`${BASIC_URL}/user/${userId}`, {
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
  },
};
