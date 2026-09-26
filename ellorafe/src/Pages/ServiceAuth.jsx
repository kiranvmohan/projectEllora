import React from 'react'
import { Link } from 'react-router-dom'

function ServiceAuth() {
  return (
    <div className="container mt-4">
        <div className='d-flex justify-content-between align-items-center mb-3'>
            <h3 className='fw-bold text-success'>Service Requests</h3>
            <Link to="/authoritydash" className='btn btn-secondary'>Back</Link>
        </div>
        <p className='text-muted'> Manage and update residents maintenance requests</p>
        <div className='mb-4 d-flex gap-2 flex-wrap'>
            <button className='btn btn-outline-secondary'>All</button>
            <button className='btn btn-outline-warning'>Pending</button>
            <button className='btn btn-outline-primary'>In progress</button>
            <button className='btn btn-outline-success'>Resolved</button>
        </div>
        <div className='table-responsive'>
            <table className='table table-hover shadow-sm'>
                <thead className='table-light'>
                    <tr>
                    <th>#</th>
                    <th>Flat No</th>
                    <th>Resident Name</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>203</td>
                        <td>Lakshmi</td>
                        <td>Plumbing</td>
                        <td>Water leakage</td>
                        <td> <span className='badge bg-warning'>Pending</span></td>
                        <td className='d-flex justify-content-between '>
                            <button className='btn btn-outline-primary '>View</button>
                            <button className='btn btn-sm btn-success'>Mark Done</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default ServiceAuth
