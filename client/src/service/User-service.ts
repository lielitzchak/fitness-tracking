import basic_url from "./DataForAll";

export const GetAllUsers = async (): Promise<any> => {
  return await fetch(`${basic_url}/auth/login`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const GetUserById = async (id: string): Promise<any> => {
  return await fetch(`${basic_url}/user/${id}`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const CreateUser = async (user: any): Promise<any> => {
  return await fetch(`${basic_url}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const UpdateUser = async (user: any): Promise<any> => {
  return await fetch(`${basic_url}/user/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const DeleteUser = async (id: number): Promise<any> => {
  return await fetch(`${basic_url}/user/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};

// GetUserById = async (id: string): Promise<any> => {
//   try {
//     return await fetch(`${basic_url}/user/${id}`)
//       .then((res: any) => res.json())
//       .catch((err: any) => err);
//   } catch (error) {
//     console.log(error);
//   }
// };
// export const CreatUser = async (newUser: any) => {
//   try {
//     return await fetch(`${basic_url}/user`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
//       },
//       body: JSON.stringify(newUser),
//     })
//       .then((res: any) => console.log(res))
//       .catch((error: any) => console.log(error));
//   } catch (error) {
//     console.log(error);
//   }
// };
