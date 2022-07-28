// Config postgres client connect

require('dotenv').config()


// Config const and require---------------
const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const methodOverride = require('method-override')
const expressEjsLayout = require('express-ejs-layouts')
const navController = require('./controllers/nav-controller')



// Config set and use---------------

app.set("port", process.env.PORT || 3000)
app.set("database", "generalassembly")
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));
app.use(expressEjsLayout)
app.set('view engine', 'ejs')

//---- set up of the Postgres database client
// pg has a bunch of stuff just need client
const dbClient = require('pg').Client
const client = new dbClient({
    user:"postgres",
    password:"2356",
    host:"Digital-S-Lumos4322598",
    //port is optional this is 5432 default
    port: 5432,
    database: (app.get("database"))
})

//connect your client returns a promise
client.connect()
.then(()=> console.log(`✅ connect to Postgres: ${app.get("database")} 🌟`))
.catch(e => console.log("here is your error ", e))
.finally(() => client.end())


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