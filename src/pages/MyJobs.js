import { useEffect, useState, useContext } from 'react';
import JobCard from '../components/JobCard'
import Navigation from '../components/Navigation'
import { CurrentUser } from '../context/CurrentUser';
import Stack from 'react-bootstrap/Stack'
import Card from 'react-bootstrap/Card'



function MyJobs() {
    const {currentUser} = useContext(CurrentUser)
    const [ jobs, setJobs ] = useState([])
    
    console.log(currentUser._id)  
    useEffect(()=> {
        const fetchData = async() => {
            const response = await fetch(`http://localhost:5050/jobs/postedby/${currentUser._id}` , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const resData = await response.json()
            setJobs(resData)
        }
        fetchData()
    },[currentUser._id])


const children = jobs.map((job)=>{
    console.log(job)
    return(
    
            <JobCard data={job}/>
    ) 
    }
)
  return (
    <div>
        <div style={{marginBottom:'2rem'}}>
            <Navigation/>
        </div>
        <div style={{overflowX: 'scroll', margin:'4rem'}}>
            <Stack direction='horizontal' gap={3}>
            {children}
            </Stack>
        </div>
    </div>
  );
}

export default MyJobs;