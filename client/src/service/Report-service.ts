import basic_url from "./DataForAll";

export const GetAllReports = async (): Promise<any> => {
  return await fetch(`${basic_url}/report`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const GetReportById = async (id: string): Promise<any> => {
  return await fetch(`${basic_url}/report/${id}`)
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const PostReport = async (newReport: any): Promise<any> => {
  return await fetch(`${basic_url}/report`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify(newReport),
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const PutReport = async (id: string, newReport: any): Promise<any> => {
  return await fetch(`${basic_url}/report/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
    body: JSON.stringify(newReport),
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
export const DeleteReport = async (id: string): Promise<any> => {
  return await fetch(`${basic_url}/report/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    },
  })
    .then((response: Response) => response.json())
    .catch((error: Response) => error);
};
