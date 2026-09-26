
const express = require('express');
const router = new express.Router()


const userController = require('../Controllers/userController')
const{ createAnnouncements,getAnnouncements, updateAnnouncement, deleteAnnouncement} = require("../Controllers/announceController")







router.post('/user/register',userController.registerUser)
router.post('/user/login',userController.loginUser)
router.get("/",getAnnouncements)
router.post("/",createAnnouncements)
router.put("/:id",updateAnnouncement)
router.delete("/:id",deleteAnnouncement)



 
module.exports = router;