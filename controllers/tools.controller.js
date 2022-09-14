const tools = [
  {
    "id": 1,
    "name": "Abdul Mozid Fahim",
    "status": "single"
  },
  {
    "id": 2,
    "name": "Mahmudul Hasan Rahat",
    "status": "In a relationship"
  },
  {
    "id": 3,
    "name": "Faysal Talukder",
    "status": "Cheka Khor"
  },
]

module.exports.getAllTools = (req, res, next) => {
 res.json(tools)
}

module.exports.savaATools = (req, res) => {
  // console.log(req.query)
  tools.push(req.body)
  res.send(tools)
}

module.exports.getToolDetail = (req, res) => {
 const {id} = req.params
 console.log(id);
 const foundTool = tools.find(tool => tool.id == id)
 res.send(foundTool)
}
