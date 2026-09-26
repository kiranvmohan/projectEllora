const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },


flatnumber:{
    type:String,
    required: function(){
        return this.role==="resident"
    }
},

email:{
    type:String,
    required:true,
    unique:true
},
mobilenumber:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},

role:{
    
    type:String,
    required:true,
    enum:["resident","authority"]

},
designation:{
    type:String,
    required:function(){
        return this.role === "authority"
    },
    enum:["president","secretary","manager"]
}

})
const users = mongoose.model("users",userSchema);
module.exports = users;