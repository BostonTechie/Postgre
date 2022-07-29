//Dev by Andrew Urquhart 7/29/2022
//slack/discord - Drewlongshot

// set app to use express ejs views
const express = require('express')
const app = express()


// set app to use port in either .ENV or default 
app.set("port", process.env.PORT || 3000)


//Configure other requires
require('dotenv').config()
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const navController = require('./controllers/nav-controller')


// Config set and use---------------
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}))
app.use(expressEjsLayout)
app.set('view engine', 'ejs')


// Controllers ---------------
// the "home" page in this section is the index
app.use('/',navController)


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`)
});