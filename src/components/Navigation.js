import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CurrentUser } from "../context/CurrentUser";
import { setImageColor, createImageFromInitials } from "./Utilities"

function Navigation() {
  const { currentUser } = useContext(CurrentUser);
  const name = currentUser.name;
  const imgSrc = "";
  const loginActions = currentUser ? (
    <>
      <Nav.Link href="/myjobs">My Listings</Nav.Link>
      <Navbar.Brand href="/profile">
            <img
              src={
                imgSrc.length <= 0
                ? createImageFromInitials(500, name, setImageColor())
                : imgSrc
              }
              alt='profile-pic'
              width="50"
              height="auto"
              className="d-inline-block align-top"
              id="nav_profile_pic"
            />
          </Navbar.Brand>
    </>
  ) : (
    <>
      <Nav.Link href="/signup">Sign Up</Nav.Link>
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
            <Nav.Link href="/newjob">Post a Job</Nav.Link>
            <Nav.Link href="/searchjobs">Look for a Job</Nav.Link>
            {loginActions}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
