import { useState } from "react";
import { reportService } from "../../../service/Report-service";
const AddReport = (): JSX.Element => {
  const [reportsData, setReportsData]: any = useState();
  const [answerFromServer, SetAnswerFromServer]: any = useState("");
  const AddValueToReportsState = (event: any) => {
    event.preventDefault();
    setReportsData({ ...reportsData, [event.target.name]: event.target.value });
    console.log(reportsData);
  };
  const SaveDataOnClick = async (event: any) => {
    event.preventDefault();
    // if (event == undefined) SetAnswerFromServer("undef");
    return await reportService
      .PostReport(reportsData)
      .then((responseFromServer: Response) => {
        SetAnswerFromServer(responseFromServer);
        console.log("the dave successfully");
      })

      .catch((error: Response) => SetAnswerFromServer(error));
  };
  return (
    <div className="AddReport">
      <form>
        <label htmlFor="weight">weight</label>
        <input
          name="weight"
          type="number"
          placeholder="weight"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="RightHand">RightHand</label>
        <input
          name="RightHand"
          type="number"
          placeholder="RightHand"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="LeftHand">LeftHand</label>

        <input
          name="LeftHand"
          type="number"
          placeholder="LeftHand"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="RightLeg">RightLeg</label>

        <input
          name="RightLeg"
          type="number"
          placeholder="RightLeg"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="buttock">buttock</label>

        <input
          name="buttock"
          type="number"
          placeholder="buttock"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="chest">chest</label>

        <input
          name="chest"
          type="number"
          placeholder="chest"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="belly">belly</label>

        <input
          name="belly"
          type="number"
          placeholder="belly"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="LeftLeg">LeftLeg</label>

        <input
          name="LeftLeg"
          type="number"
          placeholder="LeftLeg"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <label htmlFor="Date">Date</label>

        <input
          name="Date"
          type="date"
          placeholder="date"
          onChange={(event) => AddValueToReportsState(event)}
        />
        <button onClick={(event) => SaveDataOnClick(event)}>
          save information!
        </button>
      </form>
    </div>
  );
};
export default AddReport;
