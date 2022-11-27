import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";

function LocationDropdown() {
    //Update dropdown button display based on selection
    const [title, setTitle] = useState("Select Location");
    const handleSelection = (event) => {
        event.preventDefault();
        setTitle(event.target.textContent);
    };


  return (
    <>
        <div as={ButtonGroup}>
          <DropdownButton
            as={ButtonGroup}
            key={"Primary"}
            id={`dropdown-Primarys-Primary`}
            title={title}
            className="location_dropdown_button"
          >
            <div className="location_dropdown">
              <Dropdown.Item onClick={handleSelection}> Select Location </Dropdown.Item>            
              <Dropdown.Item onClick={handleSelection}> AL </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> AK </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> AZ </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> AR </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> CA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> CO </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> CT </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> DE </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> FL </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> GA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> HI </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> ID </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> IL </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> IN </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> IA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> KS </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> KY </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> LA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> ME </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MD </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MI </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MN </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MS </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MO </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> MT </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NE </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NV </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NH </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NJ </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NM </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NY </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> NC </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> ND </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> OH </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> OK </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> OR </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> PA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> RI </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> SC </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> SD </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> TN </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> TX </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> UT </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> VT </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> VA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> WA </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> WV </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> WI </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> WY </Dropdown.Item>
            </div>
          </DropdownButton>
        </div>
    </>
  );
}

export default LocationDropdown;