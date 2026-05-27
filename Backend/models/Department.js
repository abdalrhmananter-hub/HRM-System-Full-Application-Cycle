const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);
const mongoose = require("mongoose");


const departmentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    manager:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true})

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;