import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import SubmitForm from "../components/SubmitForm";

function SignUpCustomer() {
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
        <SubmitForm route="Sign Up" />
      </Container>
    </div>
  );
}
export default SignUpCustomer;
