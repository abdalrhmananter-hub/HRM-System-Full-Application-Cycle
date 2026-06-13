
const mongoose= require("mongoose");

const payrollSchema = new mongoose.Schema({

    employee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    month:{
        type:Number,
        required:true,
        min:1,
        max:12,
    },
    year:{
        type:Number,
        required:true,
    },
    basicSalary:{
        type:Number,
        required:true,
    },
    totalLateMins: {
        type:Number,
        default: 0,
    },
    absenceDays:{
        type:Number,
        default:0,
    },
    deductions:{
        type:Number,
        default:0,
    },
    bonuses:{
        type:Number,
        default:0,
    },
    netSalary:{
        type:Number,
        required:true,
    }

},{timestamps:true});

payrollSchema.index({employee:1,month:1,year:1},{unique:true});

const Payroll = mongoose.model("Payroll",payrollSchema);

module.exports = Payroll;