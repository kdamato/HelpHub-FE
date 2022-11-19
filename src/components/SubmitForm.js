import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



function SubmitForm(props) {
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault();
    navigate('/')
  }

  const [title, setTitle] = useState('User type')
  const handleSelection = event => {
    event.preventDefault();
    setTitle(event.target.textContent)
  }

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
            <Form.Text className="text-muted">
                Please enter your email here.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
                <DropdownButton
                  as={ButtonGroup}
                  key={'Primary'}
                  id={`dropdown-Primarys-Primary`}
                  title={title}
                >
                  <Dropdown.Item  onClick={handleSelection}> Customer </Dropdown.Item>
                  <Dropdown.Item  onClick={handleSelection}> Helper </Dropdown.Item>
                </DropdownButton>
          </Form.Group>
          <Button variant="primary" type="submit">
            {props.route}
          </Button>
    </Form>
      </Container>
    </div>
  );

}
export default SubmitForm;