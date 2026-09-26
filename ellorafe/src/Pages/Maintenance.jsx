import React from 'react'
import { Link } from 'react-router-dom'

function Maintenance() {
  return (
    <div className='container mt-4'>
        <div className='d-flex justify-content-between align-items-center mb-4'>
            <h3 className='fw-bold'>Maintenance Request</h3>
            <Link to="/dashboard" className='btn btn-success'>
            Back</Link>
        </div>

        <div className='card p-4 shadow-sm mb-4'>
            <h5>Submit a request</h5>
        </div>
        <input type='text' className='form-control mb-3'placeholder='Issue e.g..,water leakage)'/>
         <textarea
          className="form-control mb-3"
          placeholder="Describe the issue"
          rows="3"
        ></textarea>

        <select className="form-control mb-3">
          <option selected disabled>Select Priority</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <button className="btn btn-primary w-100">Submit Request</button>
      </div>

      
    
  )
}

export default Maintenance
