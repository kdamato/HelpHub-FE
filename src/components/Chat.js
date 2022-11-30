
import React, { useContext, useEffect, useState } from 'react'
import '../Chat.css'
import { CurrentUser } from '../context/CurrentUser'

function Chat(props){
const { currentUser }= useContext(CurrentUser)
const [ currentMessage, setCurrentMessage ] = useState('')
const [ messageList, setMessageList ] = useState([''])


/**
 * 
 * Get messages from db by fetching  chats/:_id route
 */
useEffect(()=>{
console.log(messageList)
    console.log(props)
    const fetchData= async ()=>{
    const response = await fetch(`http://localhost:5050/chats/${props.room}`,{
        method: "GET",
        headers:{
            "Content-Type":"application/json"
        }
    })
    const resData = await response.json()
    console.log(messageList)
    setMessageList([...messageList, resData])
    console.log(messageList)
}

fetchData()
}, [props.room])





const sendMessage = async ()=>{


        if (currentMessage !== ""){
        const userInput = {
            author: currentUser.name,
            messages: messageList,
            time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
        }
        await fetch(`http://localhost:5050/chats/${props.room}`,{
            method: "PUT",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userInput)
        })

        setMessageList(userInput)
        setCurrentMessage("")
        }
    
  }

  

    return(
        <div className='chat-window'>
            <div className='chat-header'>
                <p>Live Chat</p>
            </div>
            <div className='chat-body'>
                <div className='message-container'>
                {messageList.map((messageContent)=>{
                    return (
                    <div className='message' id={currentUser.name === messageContent.author ? "you" : "other"}>
                        <div>
                            <div className='message-content'> 
                                <p>{messageContent.message}</p>
                            </div> 
                            <div className='message-meta'>
                                <p id='time'>{messageContent.time}</p>
                                <p id='author'>{messageContent.author}</p>
                            </div>
                            </div>
                        </div>)
                })}
                </div>
            </div>
            <div className='chat-footer'>
                <input type="text" value={currentMessage} placeholder='Hey..' onChange={(e)=> {setCurrentMessage(e.target.value)}} onKeyPress={(e)=>{
                    e.key === "Enter" && sendMessage()
                }}/>
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat