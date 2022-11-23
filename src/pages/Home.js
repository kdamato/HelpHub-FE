import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
import HomeCleaning from "../images/HomeCleaningHH.jpg";
import LandScaping from "../images/landscapingHH.jpg";
import PetCare from "../images/PetCareHH.jpg";
import Moving from "../images/MovingHH.jpg";
// import "../homepage.css";


function Home(props) {
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
    <div>
    <div className="top-Home-Page">
          <img src={LandScaping} alt="Landscaping" id="landscaping" />
          <img src={HomeCleaning} alt="Home Cleaning" id="homecleaning" />
          <img src={PetCare} alt="Landscaping" id="petcare" />
          <img src={Moving} alt="Landscaping" id="moving" />
          <h1 className="Title">Select a Search</h1>
          <div class="form-group">
              <label for=""></label>
              <select class="custom-select" name="" id="">
                  <option selected>Select A Location</option>
                  {/* {props.loggedInUser.locations.map((location) => {
                      return <option>{location}</option>;
                  })} */}
                  <button formAction="submit"></button>
              </select>
          </div>
        </div>
    </div>
      </Container>
    </div>

  );

}
export default Home;