import React, { useContext, useEffect, useState } from "react";
import "../Chat.css";
import { CurrentUser } from "../context/CurrentUser";

function Chat(props) {
  const { currentUser } = useContext(CurrentUser);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState(null);

  /**
   *
   * Get messages from db by fetching  chats/:_id route
   */
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/chats/${props.room}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await response.json();
      const { messages: resMessages } = resData;
      setMessages(resMessages);
    };

    fetchData();
  }, [props.room]);

  const sendMessage = async (e) => {
    if (currentMessage !== "") {
      const userInput = {
        messages: {
          author: currentUser.name,
          message: currentMessage,
          time:
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes(),
        },
      };
      await fetch(`${process.env.REACT_APP_API_URL}/chats/${props.room}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      setMessages(userInput);
      console.log(userInput);
      setCurrentMessage("");
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <div className="message-container">
          {messages?.map((messageContent) => {
            return (
              <div
                className="message"
                id={
                  currentUser.name === messageContent.author ? "you" : "other"
                }
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Hey.."
          onChange={(e) => {
            setCurrentMessage(e.target.value);

            {
              console.log(currentMessage);
            }
          }}
          onKeyPress={(e) => {
            e.key === "Enter" &&
              sendMessage().then(window.location.reload(false));
          }}
        />
        {/* <button onClick={sendMessage}>&#9658;</button> */}
      </div>
    </div>
  );

}

export default Chat;
