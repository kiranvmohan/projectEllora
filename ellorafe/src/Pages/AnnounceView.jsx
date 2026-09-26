import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { announcementsApi } from '../services/allApi';


function AnnounceView() {
    const [announce, setAnnounce] = useState([]);
    useEffect(()=>{
      viewAnnouncements()
      
    },[])

    const viewAnnouncements = async()=>{
      try{
        const result = await announcementsApi()
        if(result.status === 200){
          setAnnounce(result.data)
        }
      }
      catch(error){
        console.log("Error fetching announcements",error)
      }
    }
    return (
        <>

            <div className='container mt-4'>
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h3 className='fw-bold text-success'>Announcements</h3>
                    <Link  to="/residentdash" className="btn btn-secondary">
                    Back</Link>
                </div>

                <div className="list-group">
                    {
                      ( !announce || announce.length === 0) ? (
          <p className="text-muted text-center">No announcements yet</p>
        ) : (
          announce.map(item=>(
            <div className='card mb-3' key={item._id}> 
            <div className='card-body'>
              <h5 className='fw-bold'>{item.title}</h5>
  <span className="badge bg-secondary me-2">{item.category}</span>
              <span className="badge bg-warning text-dark">{item.priority}</span>
              <p className='mt-2'>{item.message}</p>
              <p className='text-muted small'>{new Date(item.postedAt).toLocaleString()}</p>

            </div>

            </div>
            ))
       
        )
                    }
                </div>

             
        

            </div>






        </>
    )
}

export default AnnounceView
