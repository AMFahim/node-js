let tools = [
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
  const { id } = req.params
  console.log(id);
  const foundTool = tools.find(tool => tool.id === Number(id))
  res.status(200).send({
    success: true,
    message: "Success",
    data: foundTool
  })
  // res.status(500).send({
  //   success: false,
  //   error: "Internal Server Error!"
  // })
}

module.exports.updateTool = (req, res) => {
  const { id } = req.params
  const newData = tools.find(tool => tool.id === Number(id))
  newData.id = id;
  newData.name = req.body.name;
  newData.status = req.body.status;
  res.send(newData)
  
}


module.exports.deleteTool = (req, res) => {
  const { id } = req.params
  // const filter = {_id: id}

  tools = tools.filter(tool => tool.id !== Number(id))
  res.send(tools)
}