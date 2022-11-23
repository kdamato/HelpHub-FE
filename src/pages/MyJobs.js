import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard'
import Navigation from '../components/Navigation'




function MyJobs() {
    

    
    const postedBy = "636ef2d721314dfbaf223069"
    const [ jobs, setJobs ] = useState([])
  


    useEffect(()=> {
        const fetchData = async() => {
            const response = await fetch(`http://localhost:5050/jobs/postedBy/${postedBy}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const resData = await response.json()
            setJobs(resData)
        }
        fetchData()
    },[])

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