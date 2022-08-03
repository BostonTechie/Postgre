//Dev by Andrew Urquhart 7/29/2022
//slack/discord - Drewlongshot
// async version no ejs or browser view function, console only
//https://www.youtube.com/watch?v=ufdHsFClAk0

const pool = require("../db/connectGCP")

executeAsync()

//connect your database postgres client returns a promise and some results  $database defined above
async function executeAsync() {
  try{
    await pool.connect()
    console.log(`✅ connected to Postgres: 🌟`)
    //cna only insert once unless you chance id and  SSN
    //const inputthis = await client.query("INSERT into students values ($1, $2, $3, $4, $5, $6)", ["122","","","","","4546"])
    const {rows} = await pool.query("SELECT * FROM crypto WHERE dbid = 1;")
    console.log(rows)
  }
  
  catch (e){
    console.log(`here is your async error: ${e}`)
  }

  finally {
    //await pool.end()
   // console.log("client disconnected")
  }

}


