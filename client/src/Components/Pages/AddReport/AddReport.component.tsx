import { useState } from "react";
import { PostReport } from "../../../service/Report-service";
const AddReport = (): JSX.Element => {
  const [report, setReport]: any = useState();
  const addValue = (event: any) => {
    event.preventDefault();
    setReport({ ...report, [event.target.name]: event.target.value });
    console.log(report);
  };
  const saveData = async (event: any) => {
    event.preventDefault();
    return await PostReport(report)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <div className="AddReport">
      <div className="note">
        <img
          src="https://images.unsplash.com/photo-1553044020-8c90843adf96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
        <p>
          you dont have to add a date, it will be added automatically (when you
          add a report).  
          some note about the report. there is more information
          about the report.
        </p>
      </div>
      <form>
        <label htmlFor="weight">weight</label>
        <input
          name="weight"
          type="number"
          placeholder="weight"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="RightHand">RightHand</label>
        <input
          name="RightHand"
          type="number"
          placeholder="RightHand"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="LeftHand">LeftHand</label>

        <input
          name="LeftHand"
          type="number"
          placeholder="LeftHand"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="RightLeg">RightLeg</label>

        <input
          name="RightLeg"
          type="number"
          placeholder="RightLeg"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="buttock">buttock</label>

        <input
          name="buttock"
          type="number"
          placeholder="buttock"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="chest">chest</label>

        <input
          name="chest"
          type="number"
          placeholder="chest"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="belly">belly</label>

        <input
          name="belly"
          type="number"
          placeholder="belly"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="LeftLeg">LeftLeg</label>

        <input
          name="LeftLeg"
          type="number"
          placeholder="LeftLeg"
          onChange={(event) => addValue(event)}
        />
        <label htmlFor="Date">Date</label>

        <input
          name="Date"
          type="date"
          placeholder="date"
          onChange={(event) => addValue(event)}
        />
        <button onClick={(event) => saveData(event)}>save information!</button>
      </form>

      {/* <form>
        <div className="segment">
          <h1>Sign up</h1>
        </div>

        <label>
          <input type="text" placeholder="Email Address" />
        </label>
        <label>
          <input type="password" placeholder="Password" />
        </label>
        <button className="red" type="button">
          <i className="icon ion-md-lock"></i> Log in
        </button>

        <div className="segment">
          <button className="unit" type="button">
            <i className="icon ion-md-arrow-back"></i>
          </button>
          <button className="unit" type="button">
            <i className="icon ion-md-bookmark"></i>
          </button>
          <button className="unit" type="button">
            <i className="icon ion-md-settings"></i>
          </button>
        </div>

        <div className="input-group">
          <label>
            <input type="text" placeholder="Email Address" />
          </label>
         
        </div>
      </form> */}
    </div>
  );
};
export default AddReport;
