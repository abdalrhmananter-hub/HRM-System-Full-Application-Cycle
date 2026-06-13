
const mongoose = require('mongoose');

const leaveRequestSchema = new mongoose.Schema({
    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    leaveType:{
            type:String,
            enum:["Annual","Sick","Emergency","Unpaid"],
        },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    totalDays:{
        type:Number,
        required:true
    },
    reason:{
        type:String,
    },
    status:{
        type:String,
        enum:["pending","approved","rejected"],
        default:"pending",
    },
    reviewedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    reviewedAt:{
        type:Date,
    },

},{timestamps:true})

leaveRequestSchema.index({employee: 1});
leaveRequestSchema.index({status:1});
leaveRequestSchema.index({startDate:1});

const LeaveRequest = mongoose.model("LeaveRequest", leaveRequestSchema);

module.exports = LeaveRequest;