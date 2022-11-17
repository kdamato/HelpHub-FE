import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";


function Home() {
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
      </Container>
    </div>
  );

}
export default Home;