import React from 'react'
import { Link } from 'react-router-dom'

function ServiceRequest() {
  return (
    <div className='container mt-4'>

      

        <Link to="/residentdash" style={{textDecoration:'none'}}>
        <h6 className='fw-bold'><i className='fa-solid fa-arrow-left me-1'></i> Back</h6>
        
        </Link>
        <h3 className='fw-bold text-center text-primary'> Service / Maintenance Requests</h3>
        <p className='text-center text-muted'>Submit the issue to get help</p>

        <div className='card p-4 shadow-sm col-md-6 mx-auto mt-4'>
            <label className='form-label mt-2'> Issue Category</label>
            <select className='form-contro rounded mt-4 p-2'>
                  <option value={""}>Select Issue</option>
                   <option value={"Electricity"}>Electricity</option>
                    <option value={"Plumbing"}>Plumbing</option>
                     <option value={'Lift'}>Lift / Elevator</option>
                      <option value={"Cleaning"}>Cleaning</option>
                       <option value={"Security"}>Security</option>
                        <option value={"others"}>Others</option>

                </select>

            <label className='form-label mt-3'>Issue Description</label>
           <textarea className='form-control' rows='4' placeholder="Describe the issue"></textarea>

           <button className='btn btn-primary w-100 mt-4'> Submit Request</button>
  



        </div>





      
    </div>
  )
}

export default ServiceRequest
