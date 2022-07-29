//Dev by Andrew Urquhart 7/29/2022
//slack/discord - Drewlongshot
// async version no ejs or browser view function, console only

// set app to use express ejs views
const { Client } = require("pg");

//---- set up of the Postgres database client
// pg has a bunch of stuff just need client

const client = new Client({
  user: "postgres",
  password: "2356",
  host: "Digital-S-Lumos4322598",
  //port is optional this is 5432 default
  port: 5432,
  database: "generalassembly",
});

executeAsync();
//connect your database postgres client returns a promise and some results  $database defined above
async function executeAsync() {
  try{
    await client.connect();
    console.log(`✅ connected to Postgres: 🌟`);
    const results = await client.query("SELECT * FROM students;");
    console.table(results.rows);
  }
  
  catch (e){
    console.log('here is your async error: ', e)
  }

  finally {
    await client.end();
    console.log("client disconnected");
  }

}


