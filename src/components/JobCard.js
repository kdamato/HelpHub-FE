import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CurrentUser } from '../context/CurrentUser';
import io from 'socket.io-client'
import { useState, useContext } from 'react'
import Chat from './Chat';

function JobCard(props) {
    const socket = io.connect('http://localhost:3000/myjobs')
    const [ showChat, setShowChat ]= useState(false)
    const {currentUser} = useContext(CurrentUser)


    const handleChatRequest = (e)=>{
      e.preventDefault()
      if (currentUser.name !== "" && props.data.id !== ""){
          socket.emit('join_room', props.data.id)
          setShowChat(true)
          }
      }

  return (
    <div>
      {showChat ? 
        <Chat socket={socket} username={currentUser.name} room={props.id}/>
        :
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="holder.js/100px180" />
       <Card.Body>
         <Card.Title>{props.data.name}</Card.Title>
         <Card.Text>
           Category: {props.data.category}
         </Card.Text>
         <Card.Text>
           Location: {props.data.location}
         </Card.Text>
        <Button variant="primary" onClick={handleChatRequest}>Chat</Button>
       </Card.Body>
     </Card>
     }
    </div>
  
  );
}

export default JobCard;