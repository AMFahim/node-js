const express = require("express")
const allToolsControllers = require("../../controllers/tools.controller")
const limiter = require("../../middleware/limiter.middlware")
const viewCount = require("../../middleware/viewCount")
const toolsRoute = express.Router()

toolsRoute
.route("/")
.get(allToolsControllers.getAllTools)

.post(allToolsControllers.savaATools)

toolsRoute
.route("/:id")
.get(viewCount, limiter, allToolsControllers.getToolDetail)

module.exports=toolsRoute