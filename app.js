//Dev by Andrew Urquhart 7/29/2022
//slack/discord - Drewlongshot
//PERN stack

// set app to use express ejs views
const express = require('express')
const app = express()
const cors = require("cors")


// set app to use port in either .ENV or default 
require('dotenv').config()
app.set("port", process.env.PORTFRONT || 3000)


//Configure other requires

const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const navController = require('./controllers/nav-controller')


// middle ware Config set and use---------------
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(expressEjsLayout)
app.use(cors())
app.set('view engine', 'ejs')


// Controllers ---------------
// the "home" page in this section is the index
app.use('/',navController)


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: you are now connected to:${app.get("port")} 🌟`)
});