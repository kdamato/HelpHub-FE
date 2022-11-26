import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CurrentUser } from "../context/CurrentUser";


function Navigation() {
  const { currentUser } = useContext(CurrentUser);
  const loginActions = currentUser ? (
    <p id="log-in-credentials">Logged in as {currentUser.email}</p> &&
    <Nav.Link href="/profile">{currentUser.email}</Nav.Link>
  ) : (
    <>
      <Nav.Link href="/login">Log in</Nav.Link>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
    </>
  );
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">HelpHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            {loginActions}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;