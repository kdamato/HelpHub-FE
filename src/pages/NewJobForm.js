import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState } from "react";
import FileUpload from "../components/FileUpload"


function NewJobForm(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
      event.preventDefault();
        navigate("/");
    }

//Update dropdown button display based on selection
  const [title, setTitle] = useState("Job Category");
  const handleSelection = (event) => {
    event.preventDefault();
    setTitle(event.target.textContent);
  };


  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <DropdownButton
              as={ButtonGroup}
              key={"Primary"}
              id={`dropdown-Primarys-Primary`}
              title={title}
          >
            <Dropdown.Item onClick={handleSelection}>
                {" "}Landscaping{" "}
            </Dropdown.Item>
            <Dropdown.Item onClick={handleSelection}> Pet Care </Dropdown.Item>
            <Dropdown.Item onClick={handleSelection}> Home Cleaning </Dropdown.Item>
            <Dropdown.Item onClick={handleSelection}> Help Moving </Dropdown.Item>
            </DropdownButton>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Requested</Form.Label>
            <Form.Control type="text" placeholder="Job Title" />
            <Form.Text className="text-muted">
              Please enter the job title.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Description</Form.Label>
            <Form.Control type="text" placeholder="Job Description" />
            <Form.Text className="text-muted">
              Please enter description of the job requested here.
            </Form.Text>
          </Form.Group>
          <FileUpload />
          <Button variant="primary" type="submit">
            {props.route}
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default NewJobForm;
