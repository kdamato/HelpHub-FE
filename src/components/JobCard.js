import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CurrentUser } from "../context/CurrentUser";
import { useState, useContext, useEffect } from "react";
import Chat from "./Chat";

function JobCard(props) {

  const [showChat, setShowChat] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);
  const { currentUser } = useContext(CurrentUser);
  const [provider, setProvider] = useState("");

  useEffect(() => {
    if (props.data.provider) {
      const fetchProviderName = async () => {
        const response = await fetch(
          `http://localhost:5050/memberaccounts/${props.data.provider}`
        );
        const data = await response.json();
        setProvider(data);
        // console.log(data)
      };
      fetchProviderName();
      setJobAccepted(true);
    }
  }, []);

  const handleChatRequest = (e) => {
    e.preventDefault();
    if (currentUser.name !== "" && props.data._id) {
      console.log(props.data._id);
      setShowChat(true);
    }
  };

  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <div>
      {showChat ? (
        <Card
          style={{ width: "20em", height: "30rem", justifyContent: "center" }}
        >
          <Chat username={currentUser.name} room={props.data._id} />
          <Button variant="warning" onClick={hideChat}>
            Close Chat
          </Button>
        </Card>
      ) : (
        <Card style={{ width: "20rem", height: "30rem" }}>
          <Card.Img variant="bottom" src="https://previews.123rf.com/images/ratoca/ratoca1304/ratoca130400199/18967240-help-me-message.jpg"" />

          <div style={{ marginTop: "10rem" }}>
            <Card.Title>{props.data.name}</Card.Title>
            <Card.Body>
              <Card.Text>Category: {props.data.category}</Card.Text>
              <Card.Text>Location: {props.data.location}</Card.Text>
              <Card.Text>Job Description:{props.data.description}</Card.Text>

              <div>
                {jobAccepted ? (
                  <div>
                    <Card.Text>Job Accepted By: {provider.name}</Card.Text>
                    <Button variant="warning" onClick={handleChatRequest}>
                      Chat
                    </Button>
                  </div>
                ) : (
                  <p> no workers yet</p>
                )}
              </div>
            </Card.Body>
          </div>
        </Card>
      )}
    </div>
  );
}


export default JobCard;
