import React from 'react'
import { Link } from 'react-router-dom'

function ResidentList() {
  return (
    <div className='container mt-4'>
        <div className=' d-flex justify-content-between align-items-center mb-3'>
            <Link to='/authoritydash'> <i className='fa-solid fa-arrow-left me-1'></i></Link>
            <h4 className='fw-bold text-primary'>Residents list</h4>
            
        </div>
        <div className='input-group d-flex mb-4 '>
            <input type='text'className='form-control'
           placeholder='Search by Name or flat number' />
           <botton className="btn btn-outline-primary  ">Search</botton>
        </div>

        <div className='table-responsive'>
          <table className='table table-hover shadow-sm'>
            <thead className='table-light'>
              <tr>
                <th>Flat No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Role</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>101</td>
                <td>SHA</td>
                <td>956773290</td>
                <td>Resident</td>
                <td> <button className='btn btn-outline-success btn-sm'>
                  View Profile</button></td>
              </tr>
              <tr>
                <td>409</td>
                <td>Rohith khana</td>
                <td>6745687654</td>
                <td>President</td>
                 <td> <button className='btn btn-outline-success btn-sm'>
                  View Profile</button></td>
              </tr>
              
            </tbody>
          </table>
        </div>
      
    </div>

  
  )
}

export default ResidentList
