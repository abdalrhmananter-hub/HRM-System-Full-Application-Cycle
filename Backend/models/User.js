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
    passwordHash:{
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
    }

},{timestamps:true});

userSchema.pre("save", async function(next){
    if(!this.isModified("passwordHash")) return next();
    this.passwordHash = await bcrypt.hash(this.passwordHash,10);
})

userSchema.methods.comparePassword = async function(matchedPassword){
    
   return await  bcrypt.compare(matchedPassword,this.passwordHash);

   
}

const User = mongoose.model("User",userSchema);

module.exports = User;