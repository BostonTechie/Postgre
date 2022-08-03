

//---- set up of the Postgres database client
// pg has a bunch of stuff just need client
const Pool = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    password:process.env.PASS,
    host:process.env.DBHOST,
    //port is optional this is 5432 default
    port: process.env.PORT,
    database: process.env.DATABASE,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})

module.exports = pool


//connect your database postgres client returns a promise and some results  $database defined above
// this is an example of dot chaining
// client.connect()
//   .then(()=> console.log(`✅ connected to Postgres: ${app.get("database")}, at host ${app.get("host")} 🌟`))
//   .then(() => client.query("SELECT * FROM crypto LIMIT 1;"))
//   .then((results => console.table(results.rows)))

  //insert into your database
  //can onyl be inserted once because id is primary key, also SSN is unique (column one)
  //.then(() => client.query("INSERT into students values ($1, $2, $3, $4, $5, $6)", ["7","insert1","insert2","insert3","insert4","45"]))


  
//   .catch(e => console.log("here is your error ", e))
// .finally(() => client.end(console.log('client disconnected')))