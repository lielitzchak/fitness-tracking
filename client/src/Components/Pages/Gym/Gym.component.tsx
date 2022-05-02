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

  return (
    <div>
      {gym.map((gym: any) => {
        return (
          <div key={gym._id}>
            <div className="errortext">Exeresie: {gym.Exeresie}</div>

            <div className="error">
              Reps
              {gym.Reps > 1 ? gym.Reps + " minutes" : gym.Reps + " minute"}
            </div>

            <div>Set: {gym.Set > 1 ? gym.Set + " sets" : gym.Set + " set"}</div>

            <div>Weight: {gym.Weight}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Gym;
