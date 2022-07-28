// Config const and require---------------

require('dotenv').config()
const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const navController = require('./controllers/nav-controller')



// Config set and use---------------

app.set("port", process.env.PORT || 3000)
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(expressEjsLayout)
app.set('view engine', 'ejs')


// redirect user to home page ---------------
app.get('/', (req, res) => {
    res.redirect('/')
  })

// Controllers ---------------
// the "home" page in this section is the index
app.use('/',navController)


app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});