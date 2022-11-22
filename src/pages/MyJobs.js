import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';




function MyJobs() {
    
    const jobId = '637c1aa0c4139f713a3823b6'
    const [ job, setJob ] = useState(null)

    useEffect(()=> {
        const fetchData = async() => {
            const response = await fetch(`http://localhost:5050/jobs/${jobId}`)
            const resData = await response.json()
            setJob(resData)
            console.log(resData)
        }
        fetchData()
    },[])

  return (
    <JobCard data={job}/>
  );
}

export default MyJobs;