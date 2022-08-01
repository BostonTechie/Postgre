
//https://www.youtube.com/watch?v=ldYcgPKEZC8
const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
const pool = require("../db/connectGCP")


// The get all route
router.get('/', async (req, res) => { 
    try {
      
      const allData = await pool.query("SELECT * FROM crypto LIMIT 2;")
      res.json(allData.rows)
      
    } catch (error) {
      console.log("here is your get error nav-controller: ", error.message)
    }

})

router.get('/:id', async (req, res) => { 
  try {
    const {id} = req.params
    const allData = await pool.query("SELECT * FROM crypto  WHERE crypto_id = $1 LIMIT 3;")
    res.json(allData.rows)
    
  } catch (error) {
    console.log("here is your get error nav-controller: ", error)
  }
  finally{
    
  }

})

module.exports = router