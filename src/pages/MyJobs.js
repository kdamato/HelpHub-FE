import { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';




function MyJobs() {
    

    
    const postedBy = "637c3d8097fbe76fe758267f"
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
            console.log(response)
        }
        fetchData()
    },[])

  return (
    <div> YUH </div>
  //  <JobCard data={member}/>
  );
}

export default MyJobs;