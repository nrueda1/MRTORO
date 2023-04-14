require("dotenv").config({path:'.env'});

module.exports= {
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database:process.env.DBDATABASE
}