import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TrainingProgramService } from "../../../service/Training-Program-service";

const TrainingProgram = (): JSX.Element => {
  let counter = 0;
  const [gym, setGym]: any = useState([]);

  useEffect((): void => {
    TrainingProgramService.GetAllTrainingProgram()
      .then((ResponseFromServer: Response) => setGym(ResponseFromServer))
      .catch((error: Response) => console.log(error));
  }, []);
  return (
    <>
      {/* <Link to={"/add-new-Training-Program"}>
        <img
          className="add-training program"
          src="https://did.li/uQLNf"
          alt="add recipe"
        />
      </Link> */}
      <section className="TrainingTable">
        <main className="row title">
          <ul>
            <li>Exeresie</li>
            <li>Set</li>
            <li>Reps</li>
            <li>Weight</li>
            <li>Date</li>
          </ul>
        </main>
        {gym.map((gym: any) => {
          return (
            <div key={gym._id}>
              <section className="row-fadeIn-TrainingTable">
                <article className="row fadeIn lineInData">
                  <ul>
                    <li>{gym.Exeresie}</li>
                    <li>{gym.Set}</li>
                    <li>{gym.Reps}</li>
                    <li>{gym.Weight}</li>
                    <li>{gym.Date}</li>
                  </ul>
                  <ul className="more-content">
                    <li>{gym.Notes}</li>
                  </ul>
                </article>
              </section>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default TrainingProgram;
