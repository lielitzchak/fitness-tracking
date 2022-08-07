import BASIC_URL from "./DataForAll";
const urlForTrainingProgram = `${BASIC_URL}/Training-Program`;

export const TrainingProgramService = {
  GetAllTrainingProgram: async (): Promise<any> => {
    return await fetch(urlForTrainingProgram)
      .then((ResponseFromDB: Response) => ResponseFromDB.json())
      .catch((error: Response) => error);
  },
  GetTrainingProgramById: async (trainingId: string): Promise<any> => {
    return await fetch(`${urlForTrainingProgram}/${trainingId}`)
      .then((responseFromDB: Response) => responseFromDB.json())
      .catch((error: Response) => error.json());
  },
  PostTrainingProgram: async (newTraining: any): Promise<any> => {
    return await fetch(urlForTrainingProgram, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newTraining),
    })
      .then((FromDB: Response) => FromDB.json())
      .catch((error: Response) => error.json());
  },
  PutTrainingProgram: async (trainingId: string, newGym: any): Promise<any> => {
    return await fetch(`${urlForTrainingProgram}/${trainingId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
      body: JSON.stringify(newGym),
    })
      .then((responseFromDB: Response) => responseFromDB.json())
      .catch((error: Response) => error.json());
  },
  DeleteTrainingProgram: async (trainingId: string): Promise<any> => {
    return await fetch(`${urlForTrainingProgram}/${trainingId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
      },
    })
      .then((responseFromDB: Response) => responseFromDB.json())
      .catch((error: Response) => error.json());
  },
};
