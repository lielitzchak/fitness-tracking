import { useState } from "react";
const AddReport = (): JSX.Element => {
  const [object, setoObject]: any = useState();
  const ff = (event: any) => {
    event.preventDefault();
    console.log(event);
    
  };
  return (
    <div>
      <form>
        <input
          name="weight"
          type="number"
          placeholder="weight"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="RightHand"
          type="number"
          placeholder="RightHand"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="LeftHand"
          type="number"
          placeholder="LeftHand"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="RightLeg"
          type="number"
          placeholder="RightLeg"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="buttock"
          type="number"
          placeholder="buttock"
          onChange={(event) => {
            ff(event);
          }}
        />
        <br />
        <input
          name="chest"
          type="number"
          placeholder="chest"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="belly"
          type="number"
          placeholder="belly"
          onChange={(event) => ff(event)}
        />
        <br />
        <input
          name="LeftLeg"
          type="number"
          placeholder="LeftLeg"
          onChange={(event) => ff(event)}
        />
        <br />
      </form>
    </div>
  );
};
export default AddReport;
