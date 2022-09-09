const express = require("express")
const allToolsControllers = require("../../controllers/tools.controller")
const toolsRoute = express.Router()

toolsRoute
.route("/")
.get(allToolsControllers.getAllTools)

.post(allToolsControllers.savaATools)

module.exports=toolsRoute