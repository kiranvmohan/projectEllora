import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import lock from '../assets/lock.jpg'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';



function ResidentAuth({ registerPage }) {

  const [showPassword, setShowPassword] = useState(false);

  const isRegisterPage = registerPage ? true : false;
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: "",
    flatnumber: "",
    email: "",
    mobilenumber: "",
    password: "",

    role: "resident"
  })
  const handleRegister = async () => {
    console.log("user entered data")
    console.log(userData)
    const { name, flatnumber, email, mobilenumber, password } = userData;
    if (!name || !flatnumber || !email || !mobilenumber || !password) {
      toast.warning("please fill the form completely")
    }
    else {
      // call api to register user
      const result = await registerApi(userData)
      if (result.status === 201) {
        toast.success(`${userData.name} successfully registered`)
        setUserData({
          name: "",
          flatnumber: "",
          email: "",
          mobilenumber: "",
          password: ""


        })
        navigate("/login/resident")
      }
      else if (result.status === 409) {
        toast.warning(`${userData.email} already exist,please login`)
      }
      else {
        toast.error("something happened")

      }

    }
  }
  const handleLogin = async () => {
    console.log("inside login function");
    const { email, password } = userData;
    console.log(email, password);

    if (!email || !password) {
      toast.warning("Please enter email and password")

    }
    else {
      const result = await loginApi({ email, password, role: "resident" });

      console.log("Response from login");
      console.log(result.data)



      if (result.status === 200) {

        sessionStorage.setItem("existingUser", JSON.stringify(result.data.user_data))
        sessionStorage.setItem("token", JSON.stringify(result.data.jwt_token))
        sessionStorage.setItem("role", "resident");
        navigate('/residentdash')
      }
      else if (result.status === 406) {
        toast.error("email or password mismatch")
      }
      else {
        toast.error(" Access denied")
      }

    }






  }
  useEffect(() => {
    setUserData({
      name: "",
      flatnumber: "",
      email: "",
      mobilenumber: "",
      password: "",
      role: "resident"


    })

  }, [registerPage])

  return (
    <>
      <div className='container-fluid m-5'>
        <Link to="/role" style={{ textDecoration: 'none' }}>
          <h5 className='text-warning fw-bold'><i className='fa-solid fa-arrow-left me-3'></i>BACK TO ROLE SELECT</h5></Link>

      </div>
      <div className='container-fluid  bg-light p-2  ' >
        <Row>
          <Col md={4} className='mb-5 ms-4  mt-4 d-flex justify-content-center align-items-center image-container'>
            <img className='imglock' src={lock} width={'50%'} height={'85%'} />
          </Col>
          <Col md={5} className='p-3'>
            <h4 className='text-center' style={{ color: 'lightgreen', fontWeight: 'bold' }}>ElloraLives</h4>
            {
              isRegisterPage ?
                <h6 className='text-center'>Register Your Profile</h6> :
                <h6 className='text-center'>Sign In To Your Profile</h6>

            }

            <div className='border  p-3 rounded  justify-content-center'>
              {
                isRegisterPage ?
                  (
                    <>
                      <input type='text-' value={userData.name} placeholder='Enter name' className='form-control w-100 rounded mt-3 text-muted'
                        onChange={(e) => setUserData({ ...userData, name: e.target.value })} />

                      <input type='text' value={userData.flatnumber} placeholder='Enter Flat number' className='form-control w-100 rounded mt-3'
                        onChange={(e) => setUserData({ ...userData, flatnumber: e.target.value })} />

                      <input type='text' value={userData.mobilenumber} placeholder='Enter Mobile number' className='form-control w-100 rounded mt-3'
                        onChange={(e) => setUserData({ ...userData, mobilenumber: e.target.value })} />


                      <input type='text' value={userData.email} placeholder='Enter the email' className='form-control w-100 rounded mt-3'
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} />

                      <div className='position-relative'>
                        <input type={showPassword?"text":"password"} value={userData.password} placeholder='Enter the password' className='form-control w-100 rounded mt-3'
                          onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                          <span onClick={()=> setShowPassword(!showPassword)} style= {{position:"absolute",right:'15px',top:'60%',transform:'translateY(-50%)',cursor:"pointer",color:"#6c757d"}}>
                              <i className={`fa-solid ${showPassword?"fa-eye-slash":"fa-eye"}`}></i>
                          </span>
                      </div>

                      <button className='btn btn-primary mt-3 w-100' onClick={handleRegister}>REGISTER</button>
                      <div>
                        <p className='mt-2'>Already a user? <Link to="/login/resident "> <span style={{ color: 'green' }}>LogIn</span></Link></p>

                      </div>

                    </>) :





                  (
                    <> <input type='text' value={userData.email} placeholder='Enter the email' className='form-control w-100 rounded mt-3'
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })} />


                      <div className='position-relative'>
                        <input type={showPassword?"text":"password"} value={userData.password} placeholder='Enter the password' className='form-control w-100 rounded mt-3'
                          onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
                          <span onClick={()=> setShowPassword(!showPassword)} style= {{position:"absolute",right:'15px',top:'60%',transform:'translateY(-50%)',cursor:"pointer",color:"#6c757d"}}>
                              <i className={`fa-solid ${showPassword?"fa-eye-slash":"fa-eye"}`}></i>
                          </span>
                      </div>

                      <button className='btn btn-primary mt-3 w-100' onClick={handleLogin}>Log In</button>
                      <div>
                        <p className='mt-2'>Not Registered yet <Link to="/register/resident "> <span style={{ color: 'green' }}> Register </span></Link></p>

                      </div>
                    </>

                  )
              }

            </div>
            <ToastContainer />

          </Col>




        </Row>
      </div>

    </>
  )
}

export default ResidentAuth
