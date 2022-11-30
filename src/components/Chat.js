import React, { useContext, useEffect, useState } from "react";
import "../Chat.css";
import { CurrentUser } from "../context/CurrentUser";

function Chat(props) {
  const { currentUser } = useContext(CurrentUser);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  /**
   *
   * Get messages from db by fetching  chats/:_id route
   */
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:5050/chats/${props.room}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resData = await response.json();
      const { messages } = resData;
      console.log(...resData);
      console.log(messages);
      console.log({ ...resData }.messages);
      setMessages(resData);
      console.log(messages);
    };

    fetchData();
  }, [props.room]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const userInput = {
        author: currentUser.name,
        messages: messages,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await fetch(`http://localhost:5050/chats/${props.room}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      setMessages(userInput);
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
          {messages.map((messageContent) => {
            {
              console.log(messageContent.messages);
            }
            return (
              <div
                className="message"
                id={
                  currentUser.name === messageContent.author ? "you" : "other"
                }
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.messages}</p>
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
          }}
          onKeyPress={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
}

export default Chat;
