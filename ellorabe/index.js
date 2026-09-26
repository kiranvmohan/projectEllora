require('dotenv').config()

const express = require('express');

const cors = require('cors');



const elloraServer = express();
require('./Db/connection')

elloraServer.use(cors());


elloraServer.use(express.json());




const router = require('./Routes/router')
elloraServer.use("/announcements",router);








const PORT = 5000;

elloraServer.listen(PORT,()=>{
    console.log(`server is running in the port ${PORT}`)
})

elloraServer.get('/',(req,res)=>{
    res.send("project ellora is running")
})