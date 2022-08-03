//Dev by Andrew Urquhart 7/29/2022
//slack/discord - Drewlongshot
// async version no ejs or browser view function, console only
//https://www.youtube.com/watch?v=ufdHsFClAk0

const Pool = require('pg').Pool

//need this if to be run as script
require('dotenv').config()

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

const basic = "SELECT * FROM crypto LIMIT 1;"

const updateAddLiquidity =  "UPDATE crypto SET debit = 'Liquidity Pool', credit = 'this_wallet' WHERE 'Transaction Type' = 'ADD_LIQUIDITY';"

//dot chain the async functions
connectToDB()
  .then(() => updateQuery())

///----------------------------------------


async function updateQuery(){
  const updateAddLiquidity =  "UPDATE crypto SET debit = 'Liquidity Pool', credit = 'this_wallet' WHERE \"Transaction Type\" = 'ADD_LIQUIDITY';"

try {
  pool.query(updateAddLiquidity)
} catch (error) {
  console.log(`here is your update liquid error: ${err}`)
}
finally{
  console.log('run 1 complete')
}}

//// connection to the Database funcition-------------------------------
async function connectToDB(updateAddLiquidity) {

  try{
    await pool.connect()
    console.log(`✅ connected to Postgres: 🌟`)
  }
  
  catch (error){
    console.log(`here is your connection error: ${error}`)
  }
}


