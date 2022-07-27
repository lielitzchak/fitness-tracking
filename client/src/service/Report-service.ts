import BASIC_URL from "./DataForAll";
export const reportService = {
  GetAllReports: async (): Promise<any> => {
    return await fetch(`${BASIC_URL}/report`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  GetReportById: async (reportId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/report/${reportId}`)
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  PostReport: async (newReport: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newReport),
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
  PutReport: async (reportId: string, newReport: any): Promise<any> => {
    return await fetch(`${BASIC_URL}/report/${reportId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newReport),
    })
      .then((response: Response) => response.json())
      .catch((error: Response) => error.json());
  },
  DeleteReport: async (reportId: string): Promise<any> => {
    return await fetch(`${BASIC_URL}/report/${reportId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((responseFromServer: Response) => responseFromServer.json())
      .catch((error: Response) => error.json());
  },
};
