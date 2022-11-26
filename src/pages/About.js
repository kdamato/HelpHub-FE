import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function About() {
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/')
  }

  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
        <Card style={{ width: '50rem' }}>
          <Card.Body>
            <Card.Title>About HelpHub</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              <p>This is the service where you can order one of our providers to do things such as landscaping, pet care, help with moving, and house cleaning.</p>
              <p>The process if you want to be a customer is simple. After you have created an account, do a search in your area, select someone and chat about a cost, offer it, and they’ll be on their way.</p>  
              <p>If you want to be a helper then all you have to do is make an account, go through a background check, and wait for someone to request or chat with you.</p>
            </Card.Text>
            <Card.Link href="#">Patreon Page</Card.Link>
            <Card.Link href="#">HelpHub contact email</Card.Link>
          </Card.Body>
        </Card>
        <Form onSubmit={handleSubmit}>
          <Button variant="primary" type="submit">
              Continue to site
          </Button>
        </Form>
      </Container>
    </div>
  );

}
export default About;