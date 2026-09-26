import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Components/Logout'


function AuthorityDash() {
    const [designation,setDesignation]= useState()

    useEffect (()=>{
        setDesignation( JSON.parse(sessionStorage. getItem("existingUser")).designation)
    },[])
   

    return (
        <div className='container mt-4 '>
             <div className='container-fluid  d-flex justify-content-between align-items-center'>
                            <Link to="/login/authority" style={{ textDecoration: 'none' }}>
                              <h6 className=' fw-bold'><i className='fa-solid fa-arrow-left me-1'></i></h6></Link>
                              <Logout/>
                            
                          </div>
            
            <h3 className='fw-bold text-primary text-center'>Authority Dashboard</h3>
            <p className='text-center text-muted'>Welcome {designation}</p>

            <div className='row mt-4 '>
                {(designation=== "president" || designation === "secretary")&&(         <div className='col-md-4 mb-4'>
                    <div className='card p-4 shadow-sm text-center'>
                        <i className='fa-solid fa-bullhorn fa-2x text-warning mb-3'></i>
                        <h5>Post Announcements</h5>
                        <p>share updates </p>
                        <Link to='/authority/announcements' className='btn btn-outline-warning w-100'>Manage</Link>

                    </div>
                    </div>)}
       
                {(designation=== "president"|| designation ==="manager" )&&(           <div className='col-md-4 mb-4'>
                    <div className='card p-4 shadow-sm text-center'>
                        <i className='fa-solid fa-bullhorn fa-2x text-warning mb-3'></i>
                        <h5>Service Requests</h5>
                        <p>Respond to residents</p>
                        <Link to='/servicerequestauth' className='btn btn-outline-warning w-100'>Manage</Link>

                    </div>



                </div>)}
     
     {designation === "president"&&(<div className='col-md-4 mb-4'>
                    <div className='card p-4 shadow-sm text-center'>
                        <i className='fa-solid fa-users fa-2x text-info mb-3'></i>
                        <h5>Residents</h5>
                        <p>View all registered residents </p>
                        <Link to='/residentlist' className='btn btn-outline-info w-100'>Manage</Link>

                    </div>
                </div>)}

                

            </div>
            </div>
            )
}

            export default AuthorityDash
