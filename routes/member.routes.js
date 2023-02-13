// load library express
const express = require(`express`)
const { json } = require("sequelize")

// initiate object that instance express
const app = express()

// allow to read request with json type
app.use(express.json())

// load member controller
const memberController = require(`../controller/member.controller`)

// create route to get data with method get
app.get("/", memberController.getAllMember)

// create route to post data with method post
app.post("/", memberController.addMember)

// create route to update data with method post and path find
app.post("/find", memberController.findMember)

// create route to update data with method put and define by id
app.put("/:id", memberController.UpdateMember)

// create route to delete data member with method destroy
app.delete("/:id" , memberController.deleteMember)

// export this module to another file
module.exports = app




