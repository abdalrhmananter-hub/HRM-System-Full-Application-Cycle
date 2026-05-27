const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const { required, string } = require('joi');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    nationalId:{
        type:String,
        unique:true,
        required:true,
        minlength: 6,
    },
    email:{
        type:String,
        unique: true,
        required:true,
        index:true
    },
    password:{
        type:String,
        required: true,
        minlength: 6,
    },
    phone:{
        type:String,
    },
    role:{
        type:String,
        enum:["employee" , "hr_admin"],
        default:"employee"
    },
    department:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Department",
    },
    jobRole:{
        type:String,
        required:true,
    },
    basicSalary:{
        type:Number,
        required: true,
        min:0
    },
    annualLeaveBal:{
        type:Number,
        default: 21,
    },
    hireDate:{
        type:Date,
        required:true,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    refreshToken:{
        type:String,
    },
    profilePicture:{
        type:String,
    }

},{timestamps:true});

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.comparePassword = async function(matchedPassword){
    
   return await  bcrypt.compare(matchedPassword,this.password);

   
}

const User = mongoose.model("User",userSchema);

module.exports = User;