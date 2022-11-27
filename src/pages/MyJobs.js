import { useEffect, useState, useContext } from 'react';
import JobCard from '../components/JobCard'
import Navigation from '../components/Navigation'
import { CurrentUser } from '../context/CurrentUser';

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
        <Navigation/>
        {children}
    </div>
  );
}


export default MyJobs