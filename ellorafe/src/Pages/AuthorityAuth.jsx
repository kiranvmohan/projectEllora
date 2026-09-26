import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import lock from '../assets/lock.jpg'
import { useState } from 'react'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';

function AuthorityAuth({ registerPage }) {
  const [showPassword,setShowPassword] = useState(false)

  const isRegisterPage = registerPage ? true : false
  const navigate = useNavigate();

  const [authorityData, setauthorityData] = useState({
    name: "",
    designation: "",
    email: "",
    mobilenumber: "",
    password: "",
    role: "authority"

  })
  const handleAuthregister = async () => {
    console.log("authority entered data")
    console.log(authorityData)
    const { name, designation, email, mobilenumber, password } = authorityData
    if (!name || !designation || !email || !mobilenumber || !password) {
      toast.warning("please fill the form completely")
      
    }
    else {
      const result = await registerApi(authorityData)
      if (result.status === (201)) {
        toast.success(`${authorityData.name} registered successfully`)
        setauthorityData({
          name: "",
          designation: "",
          email: "",
          mobilenumber: "",
          password: "",
          role: "authority"
        })
        navigate("/login/authority")
        
   

      }
      else if (result.status === (409)) {
        toast.warning(`${authorityData.email} already exists !!`)
      }
      else {
        toast.error("something is wrong")
      }
    }
  }
  const handleAuthLogin = async()=>{
    console.log("inside authlogin function");
    const{email,password}= authorityData;

    console.log(email,password)
    if(!email || !password){
      toast.warning("Please enter email and password")
    }
    else{
      const result = await loginApi({email,password,role:"authority"});
      
      console.log("Response from login");
      console.log(result.data)
      
      if(result.status===200)
      {
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.user_data))
        sessionStorage.setItem("token",JSON.stringify(result.data.jwt_token))
        navigate("/authoritydash")
      }
      else if (result.status === 406)
      {
        toast.error("email or password mismatch")
      }
      else{
        toast.error("something happened")
      }
    }
    
  
  }
  useEffect(()=>{
     setauthorityData({
          name: "",
          designation: "",
          email: "",
          mobilenumber: "",
          password: "",
          role: "authority"
        })
  },[registerPage])


 
  return (
    <>
      <div className='container-fluid m-5 '>
        <Link to="/role" style={{ textDecoration: 'none' }}>
          <h5 className='text-warning fw-bold'><i className='fa-solid fa-arrow-left me-3'></i>BACK TO ROLE SELECT</h5></Link>

      </div>
      <div className='container-fluid  bg-light p-2  ' >
        <Row>
          <Col md={4} className='mb-5 ms-4  mt-4 d-flex justify-content-center align-items-center image-container'>
            <img className='imglock' src={lock} alt='Authority login' width={'50%'} height={'85%'} />
          </Col>
          <Col md={5} className=''>
            <h4 className='text-center' style={{ color: 'lightgreen', fontWeight: 'bold' }}>ElloraLives</h4>
            {
              isRegisterPage ?
                <h6 className='text-center'>Register Your Profile</h6> :
                <h6 className='text-center'>Sign In To Your Profile</h6>

            }

            <div className='border p-3 rounded  justify-content-center'>
              {
                isRegisterPage ? (
                  <>
                    <input type='text' placeholder='Enter name' className='form-control w-100 rounded mt-3 '
                      onChange={(e) => setauthorityData({ ...authorityData, name: e.target.value })} />
                    <select className='form-control rounded mt-3'
                      onChange={(e) => setauthorityData({ ...authorityData, designation: e.target.value })}>
                      <option value={""}>Select Designation</option>
                      <option value={"president"}>President</option>
                      <option value={"secretary"}>Secretary</option>
                      <option value={'manager'}>Maintenance Manager</option>

                    </select>
                    <input type='text'value={authorityData.email} placeholder='Enter the email' className='form-control w-100 rounded mt-3'
                      onChange={(e) => setauthorityData({ ...authorityData, email: e.target.value })} />
                    <input
                      type="text"
                      placeholder="Enter Mobile number"
                      className="form-control w-100 rounded mt-3"
                      onChange={(e) => setauthorityData({ ...authorityData, mobilenumber: e.target.value })}
                    />
<div className='position-relative'>
      <input type={showPassword?"text":"password"}  value={authorityData.password} placeholder='Enter the password' className='form-control w-100 rounded mt-3'
                      onChange={(e) => setauthorityData({ ...authorityData, password: e.target.value })} />
                      <span onClick={()=>setShowPassword(!showPassword)} style={{position:"absolute",right:'15px',top:'60%',transform:'translateY(-50%)',cursor:"pointer",color:"#6c757d"}}>
                        <i className={`fa-solid ${showPassword?"fa-eye-slash":"fa-eye"}`}></i>
                      </span>
</div>

                

                    <button className='btn btn-primary mt-3 w-100' onClick={handleAuthregister}>Register as Authority</button>

                    <div>

                    </div>
                     < p className='mt-2'>Already a user? <Link to= "/login/authority"> <span style={{ color: 'green' }}>LogIn</span></Link></p>
                  </>





                ) : (
                  <>
                    <input type='text'value={authorityData.email} placeholder='Enter the email' className='form-control w-100 rounded mt-3'
                      onChange={(e) => setauthorityData({ ...authorityData, email: e.target.value })} />
                  <div className='position-relative'>
      <input type={showPassword?"text":"password"}  value={authorityData.password} placeholder='Enter the password' className='form-control w-100 rounded mt-3'
                      onChange={(e) => setauthorityData({ ...authorityData, password: e.target.value })} />
                      <span onClick={()=>setShowPassword(!showPassword)} style={{position:"absolute",right:'15px',top:'60%',transform:'translateY(-50%)',cursor:"pointer",color:"#6c757d"}}>
                        <i className={`fa-solid ${showPassword?"fa-eye-slash":"fa-eye"}`}></i>
                      </span>
</div>
                       <button className='btn btn-primary mt-3 w-100' onClick={handleAuthLogin}>Log In</button>










                    < p className='mt-2'>Not Registered? <Link to="/register/authority">  <span style={{ color: 'green' }}>Register</span></Link></p>
                  </>
                )





              }




           

          </div>

        </Col >

        <ToastContainer />






      </Row>
      
    </div >
    </>
    

  )
}

export default AuthorityAuth

