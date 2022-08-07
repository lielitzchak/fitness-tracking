import BASIC_URL from "./DataForAll";
export const UserService = {
  GetAllUsers: async (): Promise<any> => {
    return await fetch(`${BASIC_URL}/user`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  GetUserByEmail: async (
    userEmail: string,
    userPassword: string
  ): Promise<any> => {
    return await fetch(`${BASIC_URL}/user/${userEmail}/${userPassword}`)
      .then((responseFromUser: Response) => responseFromUser.json())
      .catch((error: Response) => error.json());
  },
  GetUserById: async (userId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/user/${userId}`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  CreateUser: async (user: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
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
      .catch((errorFromServer: Response) => errorFromServer.json());
  },
  DeleteUser: async (userId: string): Promise<any> => {
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
