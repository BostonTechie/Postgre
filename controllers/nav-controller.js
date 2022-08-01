const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
const pool = require("../db/connectGCP")


// The home route will navigate to the home.ejs
router.get('/', async (req, res) => { 
    try {
      const allData = await pool.query("SELECT * FROM crypto LIMIT 2;")
      res.json(allData.rows)
      
    } catch (error) {
      console.log("here is your get error nav-controller: ", error)
    }
    finally{
      res.render('home')
    }

})

module.exports = router