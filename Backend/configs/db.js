const mongoose = require('mongoose');

const DB_connection = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('DataBase Is connected Sucessfully');
    } catch (error) {
        console.log(error)
    }
}


module.exports = DB_connection;