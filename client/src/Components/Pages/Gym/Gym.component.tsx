import { response } from "express";
import { useEffect, useState } from "react";
import getAllGym from "../../../service/Gym-service";
const Gym = (): JSX.Element => {
  const [gym, setGym]: any = useState([]);
  useEffect((): void => {
    try {
      getAllGym()
        .then((Response: Response) => setGym(Response))
        .catch((err: Response) => console.log(err));
    } catch (error: any) {
      console.log(error);
    }
  }, []);
  //   createdAt
  // :
  // 2022-05-02T14:33:26.936+00:00
  // updatedAt

  return (
    <div>
      {gym.map((gym: any) => {
        return (
          <div key={gym._id}>
            <h3>Exeresie:</h3> <p>{gym.Exeresie}</p>
            <h3>Reps:</h3>
            <p>{gym.Reps > 1 ? gym.Reps + " minutes" : gym.Reps + " minute"}</p>
            <h3>Sets:</h3>
            <p>{gym.Set > 1 ? gym.Set + " sets" : gym.Set + " set"}</p>
            <h3>Weight:</h3> <p>{gym.Weight} kg</p>
            <h3>created At:</h3> <p> {gym.Date}</p>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Gym;
