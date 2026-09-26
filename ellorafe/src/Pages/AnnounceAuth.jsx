import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { announcementsApi, createAnnouncementApi } from '../services/allApi'
import { toast, ToastContainer } from 'react-toastify'


function AnnounceAuth() {
  const [announcements, setAnnouncements] = useState([])

  const [announcement, setAnnouncement] = useState({
    title: "",
    category: "",
    priority: "",
    message: "",


  })
  console.log(announcement)
  const handlePublish = async () => {
    const  { title, category,priority,message } = announcement
    if (!title || !message || !category || !priority) {
      toast.warning("please fill the fields")
      return
    }
    try {
       await createAnnouncementApi(announcement)
      toast.success("Announcement published")
      fetchAnnouncements()

      setAnnouncement({
        title: "",
        category: "",
        priority: "",
        message: "",
        
      })

    }
    catch (error) {
      console.log(error)
      toast.warning("Failed to publish announcement")

    }
  }
  useEffect(()=>{
    fetchAnnouncements()
  },[])
  const fetchAnnouncements = async ()=>{
    try{
      const result = await announcementsApi()
      if(result.status === 200){
        setAnnouncementa(result.data)
      }
    }catch (err){
      console.log(err)

    }
  }
  return (
    <div className='container mt-4'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h3 className='fw-bold text-warning'> Make announcements</h3>
        <Link to="/authoritydash" className='btn btn-secondary'>Back</Link>


      </div>
      <div className="card shadow p-4">
        <div className='mb-3'>
          <label className='form-label fw-bold'>  Title</label>
          <input type='text' className='form-control ' value={announcement.title}
            placeholder="eg..,Drainage cleaning  , festive events" onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}></input>
        </div>
        <div className="mb-3">
          <label className="form-label fw-semibold">Category</label>
          <select className="form-select" value={announcement.category} onChange={(e) => setAnnouncement({ ...announcement, category: e.target.value })}>
            <option>General Notice</option>
            <option>Maintenance</option>
            <option>Event</option>
            <option>Emergency</option>

          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Priority</label>
          <select className="form-select" value={announcement.priority} onChange={(e) => setAnnouncement({ ...announcement, priority: e.target.value })}>
            <option>Normal</option>
            <option>High</option>
            <option>Urgent</option>
          </select>
        </div>

        <div className='mb-3'>
          <label className='form-label fw-semibold'>Message</label>
          <textarea rows="5" className='form-control' value={announcement.message}
            placeholder='Type the announcement here' onChange={(e) => setAnnouncement({ ...announcement, message: e.target.value })}></textarea>
        </div >
        <div className=''>
          <button className='btn btn-warning w-25 fw-semibold ' onClick={handlePublish} >
            Publish</button>

        </div>
<div>
  <h5 className="mt-5 fw-bold">Recent Announcements</h5>

{announcements.length === 0 ? (
  <p className="text-muted">No announcements yet</p>
) : (
  announcements.map((item) => (
    <div className="card mb-3" key={item._id}>
      <div className="card-body">
        <h6 className="fw-semibold">{item.title}</h6>

        <p className="mb-1">
          <strong>Category:</strong> {item.category}
        </p>
        <p className="mb-1">
          <strong>Priority:</strong> {item.priority}
        </p>
        <p>{item.message}</p>

        <p className="text-muted small">
          Posted on: {new Date(item.postedAt).toLocaleDateString()}
        </p>

        
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-primary" onClick={()=> handleEdit(item)}>
            Edit
          </button>

          <button className="btn btn-sm btn-outline-danger" onClick={()=> handleDelete(item._id)  }>
            Delete
          </button>
        </div>
      </div>
    </div>
  ))
)}

</div>
        


      </div>
      <ToastContainer autoClose={3000} />

    </div>
  )
}

export default AnnounceAuth
