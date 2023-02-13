// load library express
const express = require(`express`)

// create objext that instance express module
const app = express()

// define port of server
const PORT = 8000

// load library cors
const cors = require(`cors`)

// open cors polyce
app.use(cors())

// define all route
const memberRoute = require(`./routes/member.routes`)

// define prefix for each route
app.use(`/member`, memberRoute)

// run server base on define port 
app.listen(PORT => {
    console.log(`Server on school library running on port ${PORT}`)
})