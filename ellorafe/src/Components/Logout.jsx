import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const navigate = useNavigate()
    const handlelogout =(()=>{
        sessionStorage.clear();
        navigate("/role")
    })
  return (
    <div>
        <button className='btn btn-danger' onClick={handlelogout}>
            Logout
        </button>

      
    </div>
  )
}

export default Logout
