import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CurrentUser } from "../context/CurrentUser";

function Navigation() {
  const { currentUser } = useContext(CurrentUser);
  // let loginActions = (
  //   <>
  //     <Nav.Link href="/login">Log in</Nav.Link>
  //   </>
  // );
  // if (currentUser) {
  //   let loginActions = <p>Logged in as {currentUser.email}</p>;
  // }

  const loginActions = currentUser ? (
    !(<p>Logged in as {currentUser.email}</p>)
  ) : (
    <>
      <Nav.Link href="/login">Log in</Nav.Link>
    </>
  );
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">HelpHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/provider-signup">Sign Up Provider</Nav.Link>
            <Nav.Link href="/customer-signup">Sign up Customer</Nav.Link>
            {loginActions}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
