import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp() {
  const navigate = useNavigate();
  // const { setCurrentUser } = useContext(CurrentUser);
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [credentials, setCredentials] = useState({
  //   email: "",
  //   password: "",
  // });

  const handleSubmit = (e) => {
      e.preventDefault();
      // const response = await fetch(
      //   "http://localhost:5050/memberAccounts/login",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(credentials),
      //   }
      // );
      // const data = await response.json();

      // if (response.status === 200) {
      //   setCurrentUser(data.credentials);
      //   localStorage.setItem("token", data.token);
        navigate("/");
    //   } else {
    //     setErrorMessage(data.message);
    //   }
    }

    const [title, setTitle] = useState("User type");
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
        <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
            <Form.Text className="text-muted">
              Please enter your name here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Age" />
            <Form.Text className="text-muted">
              Please enter your age here
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
            <Form.Text className="text-muted">
              Please enter your email here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" />
            <Form.Text className="text-muted">
              Please enter your password here
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="State" />
            <Form.Text className="text-muted">
              Please enter your state here
            </Form.Text>
          </Form.Group>

        <Form.Group>
            <DropdownButton
              as={ButtonGroup}
              key={"Primary"}
              id={`dropdown-Primarys-Primary`}
              title={title}
            >
              <Dropdown.Item onClick={handleSelection}>
                {" "}
                Customer{" "}
              </Dropdown.Item>
              <Dropdown.Item onClick={handleSelection}> Helper </Dropdown.Item>
            </DropdownButton>
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
        </div>
      </Container>
    </div>
  );
  }
export default SignUp;