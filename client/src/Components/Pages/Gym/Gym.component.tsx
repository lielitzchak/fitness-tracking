import { useEffect, useState } from "react";
import { GymService } from "../../../service/Gym-service";
const Gym = (): JSX.Element => {
  const [gym, setGym]: any = useState([]);

  useEffect((): void => {
    GymService.getAllGym()
      .then((ResponseFromServer: Response) => setGym(ResponseFromServer))
      .catch((error: Response) => console.log(error));
  }, []);
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
