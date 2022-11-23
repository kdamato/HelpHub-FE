import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">HelpHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            {/* <Nav.Link href="/provider-signup">Sign Up Provider</Nav.Link>
            <Nav.Link href="/customer-signup">Sign up Customer</Nav.Link> */}
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link href="/">Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;