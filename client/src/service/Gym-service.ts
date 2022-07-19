import BASIC_URL from "./DataForAll";

export const GymService = {
  getAllGym: async (): Promise<any> => {
    return await fetch(`${BASIC_URL}/gym`)
      .then((responseFromUser: Response) => responseFromUser.json())
      .catch((error: Response) => error.json());
  },
  getGymById: async (gymId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/gym/${gymId}`)
      .then((responseFromUser: Response) => responseFromUser.json())
      .catch((error: Response) => error.json());
  },
  PostGym: async (newGym: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/gym`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newGym),
    })
      .then((FromUser: Response) => FromUser.json())
      .catch((error: Response) => error.json());
  },
  PutGym: async (gymId: string, newGym: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/gym/${gymId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newGym),
    })
      .then((responseFromUser: Response) => responseFromUser.json())
      .catch((error: Response) => error.json());
  },
  DeleteGym: async (gymId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/gym/${gymId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((responseFromUser: Response) => responseFromUser.json())
      .catch((error: Response) => error.json());
  },
};
