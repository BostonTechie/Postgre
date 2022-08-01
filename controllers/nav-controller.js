
//https://www.youtube.com/watch?v=ldYcgPKEZC8
const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
const pool = require("../db/connectGCP")


// The get all route
router.get("/", async (req, res) => { 
    try {
      
      const allData = await pool.query("SELECT * FROM hive LIMIT 2;")
      res.json(allData.rows)
      
    } catch (error) {
      console.log("here is your get error nav-controller: ", error.message)
    }

})

router.get("/:id", async (req, res) => { 
  try {
    const { id } = req.params
    const selectData = await pool.query("SELECT * FROM hive WHERE dbid = $1", [id])
    res.json(selectData.rows[0])
    
  } catch (error) {
    console.log("here is your get error nav-controller: ", error)
  }
})

// The  post route
router.post('/', async (req, res) => { 
  try {
    
    const allData = await pool.query("SELECT * FROM hiveengine LIMIT 2;")
    res.json(allData.rows)
    
  } catch (error) {
    console.log("here is your get error nav-controller: ", error.message)
  }

})

module.exports = router