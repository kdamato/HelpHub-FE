import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CurrentUser } from '../context/CurrentUser';
import io from 'socket.io-client'
import { useState, useContext, useEffect } from 'react'
import Chat from './Chat';

function JobCard(props) {
    const socket = io.connect('http://localhost:3000/myjobs')
    const [ showChat, setShowChat ]= useState(false)
    const [ jobAccepted, setJobAccepted ] = useState(false)
    const {currentUser} = useContext(CurrentUser)
   



    useEffect(()=>{
      if(props.data.provider !== undefined){
        console.log(props.data.id, props.data.provider)
          setJobAccepted(true)
      }
    },)

    const handleChatRequest = (e)=>{
      e.preventDefault()
      if (currentUser.name !== "" && props.data.id !== ""){
        console.log(props.data.id)
          socket.emit('join_room', props.data.id)
          setShowChat(true)
          }
      }

const hideChat=()=>{
    setShowChat(false)
}



  return (
    <div>
      {showChat ? 
      <Card style={{ width: '20em', height: '30rem',justifyContent:'center'}}>
        <Chat socket={socket} username={currentUser.name} room={currentUser._id}/>
        <Button variant="warning" onClick={hideChat}>Close Chat</Button>

      </Card>
        :
     <Card style={{ width: '20rem', height: '30rem', }}>
         <Card.Img variant="bottom" src="holder.js/100px180" />

         <div style={{marginTop: '10rem'}}>
         <Card.Title>{props.data.name}</Card.Title>
       <Card.Body>
         <Card.Text>
           Category: {props.data.category}
         </Card.Text>
         <Card.Text>
           Location: {props.data.location}
         </Card.Text>
         <Card.Text>
           Job Description:{props.data.description}
         </Card.Text>
         <Card.Text>
           Job Accepted By: {props.data.provider}
         </Card.Text>
       </Card.Body>
       <div>
        {jobAccepted ? <Button variant="warning" onClick={handleChatRequest}>Chat</Button> : <p> no workers yet</p>}
       </div>

         </div>
     </Card>
     }
    </div>
  
  );
}

export default JobCard;