import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function LocationDropdown(props) {
  //Update dropdown button display based on selection
  const [title, setTitle] = useState("Select Location");

  //prettier-ignore
  const states = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD", "MA", "MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

  const mapStates = states.map((state, i) => {
    return (
      <option value={state} key={i}>
        {state}
      </option>
    );
  });

  return (
    <div className="Location Dropdown">
      <Form.Select
        aria-label="Location select"
        name="location"
        value={props.job}
        onChange={(e) => {
          props.setCredentials({
            ...props.credentials,
            location: e.target.value,
          });
          props.setJob({ ...props.job, location: e.target.value });
          setTitle(e.target.value);
        }}
      >
        <option>{title}</option>
        {mapStates}
      </Form.Select>
    </div>
  );
}

export default LocationDropdown;
