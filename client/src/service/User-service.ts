import basic_url from "./DataForAll";

// ! create user is the same as register = method: "POST"

// ! login is the same as login = method: "POST"

// ! get user by id is the same as get user by id = method: "GET"

// ! update user is the same as update user = method: "PUT"

// ! delete user is the same as delete user = method: "DELETE"

// ! register is the same as create user = method: "POST"

// !this function is available only for admin
export const GetAllUsers = async (): Promise<any> => {
  return await fetch(`${basic_url}/user`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const GetUserByEmail = async (
  Email: string,
  Password: string
): Promise<any> => {
  return await fetch(`${basic_url}/user/${Email}/${Password}`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
// ! give me the user by id , same as login.
export const GetUserById = async (id: string): Promise<any> => {
  return await fetch(`${basic_url}/user/${id}`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};

// ! create user same as register.
export const CreateUser = async (user: any): Promise<any> => {
  return await fetch(`${basic_url}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
// ! update user same as update user.
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

// ! delete user same as delete user.
export const DeleteUser = async (id: string): Promise<any> => {
  return await fetch(`${basic_url}/user/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
