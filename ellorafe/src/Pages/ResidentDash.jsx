import React, { useEffect, useState } from 'react'
import { Link, Links } from 'react-router-dom'
import Logout from '../Components/Logout'


function ResidentDash() {
    const [name,setName] = useState("")
    useEffect(()=>{

      let  savedResident = sessionStorage.getItem("existingUser");
        if( savedResident){
                setName(JSON.parse(savedResident).name)

        }
    

    },[])
  return (

    <div className='container mt-4' >
        
         <div className='container-fluid  d-flex justify-content-between align-items-center'>
                <Link to="/login/resident" style={{ textDecoration: 'none' }}>
                  <h6 className=' fw-bold'><i className='fa-solid fa-arrow-left me-1'></i></h6></Link>
                  <Logout/>
                
              </div>

              <div className='row mt-4'>
                
              </div>
        <h3 className='fw-bold text-center text-success'>Resident Dashboard</h3>
        <p className='text-center text-muted'>welcome <span className='text-warning'>{name}</span></p>
        <div className='row mt-5'>
            <div className='col-md-4 mb-4'>
                <div className='card p-4 shadow-sm text-center'>
                    <i className='fa-solid fa-bullhorn fa-2x text-warning mb-3'></i>
                    <h5>Announcements</h5>
                    <p>View latest community updates</p>
                    <Link to="/announcement" className='btn btn-outline-success w-100'>View</Link>
                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='card p-4 shadow-sm text-center'>
                    <i className='fa-solid fa-screwdriver-wrench fa-2x text-primary mb-3'></i>
                    <h5>Service Requests</h5>
                    <p>Submit or track maintenance requests</p>
                    <Link to="/servicerequest" className='btn btn-outline-primary w-100'>Go</Link>
                </div>
            </div>
            <div className='col-md-4 mb-4'>
                <div className='card p-4 shadow-sm text-center'>
                    <i className='fa-solid fa-address-book fa-2x text-info mb-3'></i>
                    <h5>Contacts</h5>
                    <p>Find authority contact details</p>
                    <Link to="/contacts" className='btn btn-outline-info w-100'>View</Link>
                </div>
            </div>
        </div>
      
    </div>
    
  )
}

export default ResidentDash
