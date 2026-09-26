const announcements = require("../Models/announceSchema");



exports.createAnnouncements = async(req,res)=>{
    try{
        const {title,category,priority,message} = req.body

        if(!title || !message || !category || !priority){
            return res.status(400).json("All fields are required")
        }

        const newAnnouncement = new announcements({
            title,
             category,
              priority,
            message,
            
           
           
        })
        await newAnnouncement.save()
        res.status(200).json (newAnnouncement)

    }catch(error){
        console.log(error)
        res.status(500).json (error)
    }
}

exports.getAnnouncements = async(req,res)=>{

    try{
        const data = await announcements.find().sort({postedAt: -1 })
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.updateAnnouncement = async(req,res)=>{
    try{
        const { id }= req.params
        const updatedData = req.body

        const updatedAnnouncement = await announcements.findByIdAndUpdate(id,updatedData,
            {new : true}
        )

        if(!updatedAnnouncement){
            return res.status(404).json("Announcement not found")
        }
        res.status(200).json(updatedAnnouncement)
    } catch (error){
        console.log(error)
        res.status(500).json(error)
    }
}


exports.deleteAnnouncement = async (req,res)=>{
    try{
        const {id} = req.params
        const deleted = await announcements.findByIdAndDelete(id)
        if(!deleted){
            return res.status(404).json("Announcement not found")
        }
        res.status(200).json("Announcement deleted successfully")
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}