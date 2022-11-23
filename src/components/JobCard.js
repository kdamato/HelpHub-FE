import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function JobCard(props) {
    const handleChatRequest = (e)=>{
        e.preventDefault()
        return(
          <div>
            
          </div>
        )
    }

  return (
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
  );
}

export default JobCard;