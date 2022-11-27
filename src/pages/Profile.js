import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate();

    function clearStorage() {
        // Clear localStorage token 
        localStorage.clear();
        navigate("/");
        window.location.reload(false);
      }

  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
    <div>
    <div className="top-Home-Page">
          <div class="form-group">
            <button onClick={clearStorage}>Log out</button>
          </div>
        </div>
    </div>
      </Container>
    </div>

  );

}
export default Profile;