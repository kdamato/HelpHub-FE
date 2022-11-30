import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";
import { setImageColor, createImageFromInitials } from "../components/Utilities"
import { CurrentUser } from "../context/CurrentUser";
import { useContext } from "react";


function Profile() {
    const { currentUser } = useContext(CurrentUser);

    const name = currentUser.name;
    const imgSrc = "";

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
        <img
            className="profile_pic"
            id='preview'
            src={
                imgSrc.length <= 0
                    ? createImageFromInitials(500, name, setImageColor())
                    : imgSrc
            }
            alt='profile-pic'
        />
        <div className="top-Home-Page">
        <h2>About Me</h2>
        <p>{currentUser.name}</p>
        <p>{currentUser.location}</p>
        <p>{currentUser.name}</p>
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