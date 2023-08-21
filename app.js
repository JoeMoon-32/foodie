//import mysql module
const mysql = require('mysql');

//gives values to create connection to mysql server
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    database: 'foodie',
    user: 'root',
    password: '1234'
});

//notifies if error occurs or connection is successful
connection.connect( function(err){
    if(err) {
        console.log("error occuring when connecting")
    }
    else {
        console.log("connection created succesfully")
    }
})