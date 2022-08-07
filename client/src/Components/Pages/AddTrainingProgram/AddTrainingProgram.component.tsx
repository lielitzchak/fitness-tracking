import { useState } from "react";
import { TrainingProgramService } from "../../../service/Training-Program-service";
const AddTrainingProgram = () => {
  const [TrainingProgram, setTrainingProgram] = useState({});
  const UpdateTrainingProgram = (event: any) => {
    setTrainingProgram({
      ...TrainingProgram,
      [event.target.name]: event.target.value,
    });
  };
  const OnClickSaveData = (event: any) => {
    event.preventDefault();
    console.log(TrainingProgram);
    TrainingProgramService.PostTrainingProgram(TrainingProgram)
      .then((responseFromServer: any) => {
        console.log(responseFromServer);
      })
      .catch(() => {});
  };

  return (
    <div>
      <form>
        <label htmlFor="Exeresie">Exeresie Name</label>
        <input
          type="text"
          name="Exeresie"
          onChange={(event) => {
            UpdateTrainingProgram(event);
          }}
        />
        <br />
        <label htmlFor="Set">how many sets?</label>
        <input
          type="number"
          name="Set"
          onChange={(event) => {
            UpdateTrainingProgram(event);
          }}
        />
        <br />
        <label htmlFor="Reps">how many reps?</label>
        <input
          type="number"
          name="Reps"
          onChange={(event) => {
            UpdateTrainingProgram(event);
          }}
        />
        <br />
        <label htmlFor="Weight">
          how much weight? (without the Olympic pole, and Only one side)
        </label>
        <input
          type="number"
          name="Weight"
          onChange={(event) => {
            UpdateTrainingProgram(event);
          }}
        />
        <br />
        <label htmlFor="Notes">some notes?</label>
        <input
          type="text"
          name="Notes"
          onChange={(event) => {
            UpdateTrainingProgram(event);
          }}
        />
        <br />
        <label htmlFor="Date">date (has a default date)</label>
        <input
          type="date"
          name="Date"
          onChange={(event) => {
            UpdateTrainingProgram(event);
          }}
        />
        <br />
        <button onClick={(event) => OnClickSaveData(event)}>save</button>{" "}
      </form>
      AddTrainingProgram
    </div>
  );
};

export default AddTrainingProgram;
