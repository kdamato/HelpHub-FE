import Navigation from "../components/Navigation";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import { CurrentUser } from "../context/CurrentUser";
import "../jobs.css";

/**@TODO fix selection lagging */

const Jobs = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUser);
  const [allJobs, setAllJobs] = useState([]);
  const [title, setTitle] = useState("");
  const [endpoint, setEndpoint] = useState("");
  const [provider, setProvider] = useState({ provider: "" });
  let children;
  const url = `http://localhost:5050/jobs/` + endpoint;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const resData = await response.json();
      setAllJobs(resData);
    };
    fetchData();
  }, [url]);

  const handleSelection = (e) => {
    setTitle(e.target.value);
    console.log(title);
    if (title === "homeCleaning") {
      setEndpoint("category/homeCleaning");
      console.log(title);
    } else if (title === "petCare") {
      setEndpoint("category/petCare");
    } else if (title === "landscaping") {
      setEndpoint("category/landscaping");
    } else {
      setEndpoint("");
      console.log("not found");
    }
  };

  //Updates job provider to currently logged in user
  const handleRequestWork = async (job) => {
    try {
      const response = await fetch(`http://localhost:5050/jobs/${job._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
      });
      const data = await response.json();
      setProvider(data);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  if (allJobs.length > 0) {
    children = allJobs.map((job, i) => {
      if (job.status === "posted") {
        return (
          <div>
            <Card style={{ width: "18rem" }} key={`Card ${i}`}>
              <Card.Img variant="top" src="https://previews.123rf.com/images/ratoca/ratoca1304/ratoca130400199/18967240-help-me-message.jpg" />
              <Card.Body>
                <Card.Title>{job.name}</Card.Title>
                <span className="category">
                  <Card.Text>Job Description: {job.category}</Card.Text>
                </span>
                <Card.Text>requested by: {job.postedBy}</Card.Text>
                <Card.Text>Location: {job.location}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleRequestWork(job)}
                >
                  Request Work
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      }
    });
  } else {
    return (children = (
      <div>
        Sorry no jobs are available, please try a different search or check back
        later!
      </div>
    ));
  }

  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
        Search by Category:
        <Form onChange={handleSelection}>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="landscaping">Landscaping</option>
            <option value="homeCleaning">Home Cleaning</option>
            <option value="petCare">Pet Care</option>
          </Form.Select>
        </Form>
        <div className="jobChildren">{children}</div>
      </Container>
    </div>
  );
};
export default Jobs;
