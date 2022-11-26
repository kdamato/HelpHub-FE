import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import SubmitForm from "../components/SubmitForm";

function Login() {
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
        <SubmitForm route="Log In" />
      </Container>
    </div>
  );
}
export default Login;
