
const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require('mongoose');


const attendanceSchema = new mongoose.Schema({
    employee:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    checkIn:{
        type:Date,
    },
    checkOut:{
        type:Date,
    },
    lateMinutes:{
        type:Number,
        default:0,
    },
    status:{
        type:String,
        enum:["present","absent","on_leave","holiday"],
    },
    notes:{
        type:String,
    }
},{timestamps:true});

attendanceSchema.index({employee:1 , date:1}, {unique:true})
const Attendance = mongoose.model("Attendance",attendanceSchema);

module.exports = Attendance;
