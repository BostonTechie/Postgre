//Dev by Andrew Urquhart 7/29/2022
//slack/discord - Drewlongshot
// async version no ejs or browser view function, console only
//https://www.youtube.com/watch?v=ufdHsFClAk0

// set app to use express ejs views
const { Client } = require("pg")
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

const client = new Client({
  user: "postgres",
  password: process.env.PASS,
  host: process.env.DBHOST,
  //port is optional this is 5432 default
  port: process.env.PORT,
  database: process.env.DATABASE,
});

executeAsync()

//connect your database postgres client returns a promise and some results  $database defined above
async function executeAsync() {
  try{
    await client.connect()
    console.log(`✅ connected to Postgres: 🌟`)
    //cna only insert once unless you chance id and  SSN
    //const inputthis = await client.query("INSERT into students values ($1, $2, $3, $4, $5, $6)", ["122","","","","","4546"])
    const {rows} = await client.query("SELECT * FROM crypto WHERE dbid = 1;")
    console.log(rows)
  }
  
  catch (e){
    console.log(`here is your async error: ${e}`)
  }

  finally {
    await client.end()
    console.log("client disconnected")
  }

}


