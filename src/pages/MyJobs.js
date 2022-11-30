import { useEffect, useState, useContext } from "react";
import JobCard from "../components/JobCard";
import Navigation from "../components/Navigation";
import { CurrentUser } from "../context/CurrentUser";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import ToDoJobCard from "../components/ToDoJobCard";
import Container from 'react-bootstrap/Container'

function MyJobs() {
  const { currentUser } = useContext(CurrentUser);
  const [jobs, setJobs] = useState([]);
  const [doJobs, setDoJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseMyJobs = await fetch(
        `http://localhost:5050/jobs/postedby/${currentUser._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resMyJobsData = await responseMyJobs.json();
      setJobs(resMyJobsData);

      const responseDoJobs = await fetch(
        `http://localhost:5050/jobs/provider/${currentUser._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resDoJobsData = await responseDoJobs.json();
      setDoJobs(resDoJobsData);
      // console.log(doJobs);
    };
    fetchData();
  }, [currentUser._id]);
  
  const myJobs = jobs.map((job, i) => {
    // console.log(job);
    return <JobCard data={job} key={i} />;
  });
  const toDo = doJobs.map((job, i) => {
    // console.log(job);
    return <ToDoJobCard data={job} key={i} />;
  });

  return (
    <div>
        <Container>
            <Stack gap={3}>
                <Navigation />
            </Stack>
            <div style={{ overflowX: "scroll", margin: "4rem" }}>
            <h3>Jobs Created</h3>
            <Stack direction="horizontal" gap={3}>
                {myJobs}
            </Stack>
            </div>
            <div style={{ overflowX: "scroll", margin: "4rem" }}>
                <h3>Jobs To Complete</h3>
            <Stack direction="horizontal" gap={3}>
                {toDo}
            </Stack>
            </div>
        </Container>
    </div>
  );
}

export default MyJobs;