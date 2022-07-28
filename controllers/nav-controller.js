const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")

// The home route will navigate to the home.ejs
router.get('/home', (req, res) => { 
    res.render('home')
  })

module.exports = router