import { useState } from 'react'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

import {Route, Routes } from 'react-router-dom'
import RoleSelect from './Pages/RoleSelect'
import ResidentAuth from './Pages/ResidentAuth'
import AuthorityAuth from './Pages/AuthorityAuth'
import ResidentDash from './Pages/ResidentDash'
import AuthorityDash from './Pages/AuthorityDash'
import ServiceRequest from './Pages/ServiceRequest'
import ResidentList from './Pages/ResidentList'
import ServiceAuth from './Pages/ServiceAuth'
import AnnounceAuth from './Pages/AnnounceAuth'
import AnnounceView from './Pages/AnnounceView'
import { ToastContainer } from 'react-toastify'




function App() {
 

  return (
    
    <>
    <ToastContainer/>
  
    
  
    <Header/>
    <>
    
       <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/role' element={<RoleSelect/>}/>
      <Route path='/login/resident' element={<ResidentAuth/>}/>
      <Route path='/register/resident' element={<ResidentAuth registerPage={'registerPage'}/>}/>
      <Route path='/login/authority' element={<AuthorityAuth/>}/>
      <Route path='/register/authority' element={<AuthorityAuth registerPage= {'registerPage'}/>}/>
      <Route path='/residentdash' element={<ResidentDash/>}/>
      <Route path="/authoritydash" element={<AuthorityDash/>}/>
      <Route path="/servicerequest" element={<ServiceRequest/>}/>
      <Route path="/residentlist" element={<ResidentList/>}/>
      <Route path="/servicerequestauth" element={<ServiceAuth/>}/>
      <Route path='/authority/announcements' element={<AnnounceAuth/>}/>

      <Route path ="/announcement" element={<AnnounceView/>}/>

      
      
      
         
         
        

      
    </Routes></>
 
   
    <Footer/>
    


     
    </>
  )
}

export default App
