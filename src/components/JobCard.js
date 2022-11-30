import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CurrentUser } from "../context/CurrentUser";
import io from "socket.io-client";
import { useState, useContext } from "react";
import Chat from "./Chat";

function JobCard(props) {
    const socket = io.connect("http://localhost:3000/myjobs");
    const [showChat, setShowChat] = useState(false);
    const { currentUser } = useContext(CurrentUser);
    // const [Img, setImg] = useState("");

    // const src = Img;

    const handleChatRequest = (e) => {
        e.preventDefault();
        if (currentUser.name !== "" && props.data.id !== "") {
            socket.emit("join_room", props.data.id);
            setShowChat(true);
        }
    };

    const hideChat = () => {
        setShowChat(false);
    };

    // const handleDefaultImg = (e) => {
    //     console.log(props.data.category);
    //     if (props.data.category === "homeCleaning") {
    //       setImg("");
    //     } else if (props.data.category === "petCare") {
    //       setImg("https://www.akc.org/wp-content/uploads/2018/01/bulldog-walk.jpg");
    //     } else if (props.data.category === "landscaping") {
    //       setImg("");
    //     } else {
    //       setImg("");
    //       console.log("not found");
    //     }
    //   };
    

    return (
        <div>
            {showChat ? (
                <Card
                    style={{
                        width: "20em",
                        height: "30rem",
                        justifyContent: "center",
                    }}
                >
                    <Chat
                        socket={socket}
                        username={currentUser.name}
                        room={currentUser._id}
                    />
                    <Button variant="warning" onClick={hideChat}>
                        Close Chat
                    </Button>
                </Card>
            ) : (
                <Card style={{ width: "20rem", height: "30rem" }}>
                    <Card.Img variant="top" src= "https://previews.123rf.com/images/ratoca/ratoca1304/ratoca130400199/18967240-help-me-message.jpg" />
                    <Card.Body>
                        <Card.Title>{props.data.name}</Card.Title>
                        <Card.Text>Category: {props.data.category}</Card.Text>
                        <Card.Text>Location: {props.data.location}</Card.Text>
                        <Button variant="warning" onClick={handleChatRequest}>
                            Chat
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}

export default JobCard;
