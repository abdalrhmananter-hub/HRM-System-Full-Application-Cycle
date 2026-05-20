const { required } = require('joi');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const adminSchema = new mongoose.Schema({
    username:{
        type:String,
        requierd:true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true,
        minlength: 6,
    }
},{timestamps:true});

adminSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10);
})

adminSchema.methods.comparePassword = async function(matchedPassword){
    
   return await  bcrypt.compare(matchedPassword,this.password);

   
}

const Admin = mongoose.model("Admin",adminSchema);

module.exports = Admin;