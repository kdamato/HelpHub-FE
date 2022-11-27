import Container from "react-bootstrap/Container";
import Navigation from "../components/Navigation";
import Stack from "react-bootstrap/Stack";
// import HomeCleaning from "../images/HomeCleaningHH.png";
// import LandScaping from "../images/LandscapingHH.png";
// import PetCare from "../images/PetCareHH.png";
// import Moving from "../images/MovingHH.png";
import clean from "../images/clean.png";
import dog from "../images/dog.png";
import move from "../images/move.png";
import mow from "../images/mow.png";
import LocationDropdown from "../components/LocationDropdown"


function Home(props) {

  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Navigation />
        </Stack>
    <div>
    <div className="top-Home-Page">
          {/* <img src={LandScaping} alt="Landscaping" id="landscaping" />
          <img src={HomeCleaning} alt="Home Cleaning" id="homecleaning" />
          <img src={PetCare} alt="Landscaping" id="petcare" />
          <img src={Moving} alt="Landscaping" id="moving" /> */}
          <img src={clean} alt="clean" id="clean" />
          <img src={dog} alt="dog" id="dog" />
          <img src={move} alt="move" id="move" />
          <img src={mow} alt="mow" id="mow" />
          <h1 className="Title">Select a Search</h1>
          <div class="form-group">
              <LocationDropdown />
          </div>
        </div>
    </div>
      </Container>
    </div>

  );

}
export default Home;