
const express = require('express')
const app = express()
require('dotenv').config()

//Set database name that you want your PostGre to connent to as well as host
app.set("database", process.env.DATABASE)
app.set("host", process.env.DBHOST)
app.set("port", process.env.PORT)
app.set("password", process.env.PASS)


//---- set up of the Postgres database client
// pg has a bunch of stuff just need client
const dbClient = require('pg').Client
const client = new dbClient({
    user:"postgres",
    password:process.env.PASS,
    host:(app.get("host")),
    //port is optional this is 5432 default
    port: process.env.PORT,
    database: (app.get("database"))
})


//connect your database postgres client returns a promise and some results  $database defined above
// this is an example of dot chaining
client.connect()
  .then(()=> console.log(`✅ connected to Postgres: ${app.get("database")}, at host ${app.get("host")} 🌟`))
  .then(() => client.query("SELECT * FROM crypto LIMIT 1;"))
  .then((results => console.table(results.rows)))

  //insert into your database
  //can onyl be inserted once because id is primary key, also SSN is unique (column one)
  //.then(() => client.query("INSERT into students values ($1, $2, $3, $4, $5, $6)", ["7","insert1","insert2","insert3","insert4","45"]))


  
  .catch(e => console.log("here is your error ", e))
.finally(() => client.end(console.log('client disconnected')))