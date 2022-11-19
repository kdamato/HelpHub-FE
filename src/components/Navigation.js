import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">HelpHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">About Us</Nav.Link>
            <Nav.Link href="/provider-signup">Sign Up Provider</Nav.Link>
            <Nav.Link href="/customer-signup">Sign up Customer</Nav.Link>
            <Nav.Link href="/provider-login">Log in Provider</Nav.Link>
            <Nav.Link href="/customer-login">Log in Customer</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;