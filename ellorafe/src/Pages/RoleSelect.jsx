import React from 'react'
import { Link } from 'react-router-dom'


function RoleSelect() {

  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
          <h5 className='text-warning fw-bold p-4 fa-fade'><i className='fa-solid fa-arrow-left me-3'></i>BACK TO HOME</h5></Link>
      <div className='container text-center mt-2 mb-3'>
      
        <h3 className='fw-bold mb-4'>Login or Register As</h3>
        <p className='mb-5 text-muted'> <h5>Choose Role?</h5></p>
        <div className='row justify-content-center'>
          <div className='col-md-4 mb-3'>
            <div className='card p-3 shadow-sm hover-scale'>
              <i className='fa-solid fa-house-chimney fa-flip fa-3x text-success mb-3 custom-icon'></i>
              <h5 className='fw-bold'>Resident</h5>
              <p>Access your apartment</p>
              <Link to="/register/resident" className='btn btn-outline-success mt-3 w-90'>Register</Link>
               <Link to="/login/resident" className='btn btn-outline-warning mt-3 w-100'>Log In</Link>

            </div>

          </div>
          <div className='col-md-4 mb-3'>
            <div className='card p-3 shadow-sm hover-scale'>
              <i className='fa-solid fa-user-tie fa-flip fa-3x text-warning mb-3 custom-icon'></i>
              <h5 className='fw-bold'>Authority</h5>
              <p>Manage visitors,Anouncements and service request</p>
              <Link to="/register/authority" className='btn btn-outline-warning mt-3 w-90'> Register
              </Link>
                <Link to="/login/authority" className='btn btn-outline-success mt-3 w-100'> Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default RoleSelect
