
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CurrentUser } from '../context/CurrentUser'
import { useContext } from 'react'


const ProfileTile = () => {


    const { currentUser } = useContext(CurrentUser)


    const editProfile = (e)=> {
        e.preventDefault() 
        
    }

return(
    <Card style={{ width: '50rem', height: '13rem', alignSelf: 'center'}}>
       
       <Card.Body>
         <Card.Title>Profile</Card.Title>
         <Card.Img variant="top" src={currentUser.image} />
         <Card.Text>
            {"Hello, "}
           {currentUser.name}
         </Card.Text>
         <Card.Text>
            {"Your current location is "}
           {currentUser.location}
         </Card.Text>
        <Button variant="warning" type='submit' onClick={editProfile}>Edit</Button>
       </Card.Body>
     </Card>
)

}


export default ProfileTile