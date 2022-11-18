import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'


function LoginProvider() {
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/home')
  }


  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Customer Email" />
            <Form.Text className="text-muted">
                Please enter your email here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
    </Form>
      </Container>
    </div>
  );

}
export default LoginProvider;