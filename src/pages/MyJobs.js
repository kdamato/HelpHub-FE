import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';




function MyJobs() {
    

    
    const postedBy = "636ef2d721314dfbaf223069"
    const [ jobs, setJobs ] = useState('')


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
            console.log(resData)
        }
        fetchData()
    },[])

  return (
    
  <JobCard data={jobs}/>
  );
}

export default MyJobs;