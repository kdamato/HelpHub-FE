import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Stack from "react-bootstrap/Stack";
import { useState } from "react";
import FileUpload from "../components/FileUpload";
import LocationDropdown from "../components/LocationDropdown";
import Navigation from "../components/Navigation";

function NewJobForm(props) {
  const navigate = useNavigate();
  /**
   * @TODO : possibly change name of usestate from job to data so it doesn't need to call two different (setState) in locationdropdown
   */
  const [job, setJob] = useState({
    name: "",
    category: "",
    location: "",
    postedBy: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5050/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      const data = await response.json();
      setJob(data);
      console.log(data);
      navigate("/myjobs");
    } catch (error) {
      console.log(error);
    }
  };

  //Update dropdown button display based on selection
  const [title, setTitle] = useState("Job Category");
  const handleSelection = (event) => {
    event.preventDefault();
    setTitle(event.target.textContent);
  };

  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
        <Form onSubmit={handleSubmit}>
          <div className="Category Dropdown">
            <Form.Select
              aria-label="Category select"
              name="category"
              value={job.category}
              onChange={(e) => {
                setJob({ ...job, category: e.target.value });
              }}
            >
              <option>Select Job Category</option>
              <option value="petCare">Pet Care</option>
              <option value="landscaping">Landscaping</option>
              <option value="homeCleaning">Home Cleaning</option>
              <option value="movingHelp">Help Moving</option>
            </Form.Select>
          </div>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Requested</Form.Label>
            <Form.Control
              type="text"
              placeholder="Job Title"
              name="name"
              required
              value={job.name}
              onChange={(e) => {
                setJob({ ...job, name: e.target.value });
              }}
            />
            <Form.Text className="text-muted">
              Please enter the job name.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Job Description"
              name="description"
              value={job.description}
              onChange={(e) => {
                setJob({ ...job, description: e.target.value });
              }}
            />
            <Form.Text className="text-muted">
              Please enter description of the job requested here.
            </Form.Text>
          </Form.Group>
          <LocationDropdown job={job} setJob={setJob} />
          <FileUpload />
          <Button variant="primary" type="submit">
            Ask for Help!
          </Button>
        </Form>
      </Container>
    </div>
  );
}
export default NewJobForm;
