// import React from "react";
import { useEffect, useState } from "react";
import getAllGym from "../../../service/Gym-service";
const Gym = () => {
  const [gym, setGym] = useState([]);
  useEffect(() => {
    try {
      async function fetchGymData() {
        return await getAllGym()
          .then((res) => {
            return setGym(res);
          })
          .catch((err) => console.log(err));
      }
      fetchGymData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {gym.map((gym) => {
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
