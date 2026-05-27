const dns = require("node:dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const mongoose = require('mongoose');

const DB_connection = async()=>{
    try {
        await mongoose.connect(process.env.DB_URL , {dbName:"MainHRM"})
        console.log('DataBase Is connected Sucessfully');
    } catch (error) {
        console.log(error)
    }
}


module.exports = DB_connection;