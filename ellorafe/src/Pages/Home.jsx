import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import happy from '../assets/happy.jpg'
import visitor from '../assets/visitor.jpg.webp'
import announcement from '../assets/announcement.jpg'
import service from '../assets/service.jpg'
import { Link } from 'react-router-dom'

function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const [role, setRole] = useState('')

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    const user = sessionStorage.getItem("existingUser")

    if (token && user) {
      setIsLogin(true)
      setRole(JSON.parse(user).role)
    }
  }, [])

  return (
    <div className="w-full ml-7 bg-[rgb(250,250,255)]">

      <div
        className="flex flex-col justify-center min-h-[110vh]  pt-20 pl-40 bg-cover bg-center relative mb-10"
        style={{ backgroundImage: `url(${happy})` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>

        <div className=" z-10 text-4xl md:text-6xl   font-bold text-blue-50 drop-shadow-lg leading-tight animate-[fadeInUp_1s_ease-out]">
          Live Well <br />
          Live Together
        </div>

        <div className="relative z-10 animate-[fadeInUp_1s_ease-out_0.3s_both]"></div>

        

          <div className="relative  z-10 animate-[fadeInUp_1s_ease-out_0.3s_both]">
            {!isLogin ? (
              <Link to="/role" className="no-underline ">
                <button className="mt-6 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold tracking-wide rounded-full shadow-lg hover:bg-teal-600 hover:border-teal-600 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out">
                  Get Started <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </Link>
            ) : role === "resident" ? (
              <Link to="/residentdash" className="no-underline">
                <button className="mt-6 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold tracking-wide rounded-full shadow-lg hover:bg-teal-600 hover:border-teal-600 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out">
                  Manage Account <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </Link>
            ) : (
              <Link to="/authoritydash" className="no-underline">
                <button className="mt-6 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold tracking-wide rounded-full shadow-lg hover:bg-teal-600 hover:border-teal-600 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-out">
                  Manage Account <i className="fa-solid fa-arrow-right ml-2"></i>
                </button>
              </Link>
            )}
          </div>
      </div>

      <div className="p-3 font-stretch-semi-expanded gap-y-4 text-center  animate-[fadeIn_1s_ease-out]">
        <h3 className="text-lg text-neutral-500">Ellora </h3>
        <h2 className="text-3xl mt-1">Our Community Ecosystem</h2>
      </div>

      <section className="mt-15 mb-12 px-4">
        <div className="flex flex-wrap gap-8 justify-center items-stretch">

          <div className="w-80 shadow-md rounded-xl overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-[fadeInUp_0.8s_ease-out]">
            <img src={visitor} alt="Visitor Management" className="w-full h-44 object-cover" />
            <div className="p-4 flex flex-col">
              <h5 className="font-semibold text-lg mb-1">Visitor Management</h5>
              <p className="text-neutral-600">Give access for your visitors</p>
            </div>
          </div>

          <div className="w-80 shadow-md rounded-xl overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.15s_both]">
            <img src={announcement} alt="Announcements" className="w-full h-44 object-cover" />
            <div className="p-4 flex flex-col">
              <h5 className="font-semibold text-lg mb-1">Announcements</h5>
              <p className="text-neutral-600">Stay updated with community news instantly</p>
            </div>
          </div>

          <div className="w-80 shadow-md rounded-xl overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-[fadeInUp_0.8s_ease-out_0.3s_both]">
            <img src={service} alt="Service Requests" className="w-full h-44 object-cover" />
            <div className="p-4 flex flex-col">
              <h5 className="font-semibold text-lg mb-1">Service Requests</h5>
              <p className="text-neutral-600">Raise maintenance needs directly</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home