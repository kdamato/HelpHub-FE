import Navigation from "../components/Navigation"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form"


/**@TODO fix selection lagging */

const Jobs= ()=>{

    const [ allJobs, setAllJobs ] = useState([])
    const [title, setTitle] = useState('');
    const [endpoint, setEndpoint] = useState('')
   

    const url = `http://localhost:5050/jobs/` + endpoint
    

    
 useEffect(()=> {
    
    const fetchData = async() => {
            const response = await fetch(url)
            const resData = await response.json()
            setAllJobs(resData)
        }
        fetchData()
    },[url])



const handleSelection = (e) => {
    setTitle(e.target.value)
    console.log(title)    
      if(title === 'homeCleaning'){
        setEndpoint('category/homeCleaning')
        console.log(title)
      } else
      if (title === 'petCare'){
        setEndpoint("category/petCare")
      } else
      if(title === 'landscaping')
      {
        setEndpoint("category/landscaping")
      } else {
        setEndpoint('')
        console.log('not found')
      }
      
      }
      ;


const children = allJobs.map((job)=>{
    if (job.notCompleted){
    return (<div key={job.id}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{job.name}</Card.Title>
        <Card.Text>
          Job Description: {job.category}
        </Card.Text>
        <Card.Text>
          requested by: {job.postedBy}
        </Card.Text>
        <Card.Text>
          Location: {job.location}
        </Card.Text>
        <Button variant="primary">Request Work</Button>
      </Card.Body>
    </Card>

    </div>
  )
  } else {
    return (
        <div> No jobs at the moment. Try different search</div>
    )
  }

}
)

return(
    <div>
        <Navigation/>
        Search by Category:
        <Form onChange={handleSelection}>
           <Form.Select  aria-label="Default select example">
                <option>Open this select menu</option>
                <option  value="landscaping" >Landscaping</option>
                <option value="homeCleaning">Home Cleaning</option>
                <option value="petCare">Pet Care</option>
            </Form.Select> 
        </Form>          
        {children}
    </div>
    
)
}
export default Jobs