const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect")

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

module.exports.getAllTools = async (req, res, next) => {

  try {
    const {limit, page} = req.query;
    const db = getDb();

    const tool = await db
      .collection("clickwrk")
      .find({})
      // .project({ _id: 0 })
      .skip(+page * limit)
      .limit(+limit)
      .toArray();

    res.status(200).json({ success: true, data: tool })
  } catch (error) {
    next(error)
  }


  // res.json(tools)
}

module.exports.savaATools = async (req, res, next) => {
  try {
    const db = getDb();
    const tool = req.body;

    const result = await db.collection("clickwrk").insertOne(tool);
    if (!result.insertedId) {
      return res.status(400).send({ status: false, error: "Something Went Wrong" })
    }
    res.send({ success: true, message: `Tool added with id: ${result.insertedId}` })
  } catch (error) {
    next(error)
  }
}

module.exports.getToolDetail = async (req, res, next) => {
  try {
    const db = getDb();
    const {id} = req.params;

    if(!ObjectId.isValid(id)) {
      return res.status(400).json({success: false, error: "Not a valid tool id  "})
    }

    const tool = await db.collection("clickwrk").findOne({_id: ObjectId(id)});

    if(!tool) {
      return res.status(400).json({success: false, error: "couldn't find  a tool with this id."})
    }

    res.status(200).json({success: true, data: tool});

   

  } catch (error) {
    next(error)
  }
}

module.exports.updateTool = async (req, res, next) => {
  try {
    const db = getDb();
    const {id} = req.params;

    if(!ObjectId.isValid(id)) {
      return res.status(400).json({success: false, error: "Not a valid tool id  "})
    }

    const tool = await db.collection("clickwrk").updateOne({_id: ObjectId(id)}, {$set: req.body});

    if(!tool.modifiedCount) {
      return res.status(400).json({success: false, error: "couldn't update the tool."})
    }

    res.status(200).json({success: true, message: "Successfully update a tool."});

   

  } catch (error) {
    next(error)
  }
}


module.exports.deleteTool = async (req, res, next) => {
  try {
    const db = getDb();
    const {id} = req.params;

    if(!ObjectId.isValid(id)) {
      return res.status(400).json({success: false, error: "Not a valid tool id  "})
    }

    const tool = await db.collection("clickwrk").deleteOne({_id: ObjectId(id)});

    if(!tool.deletedCount) {
      return res.status(400).json({success: false, error: "couldn't delete the tool."})
    }

    res.status(200).json({success: true, message: "Successfully deleted a tool."});

   

  } catch (error) {
    next(error)
  }
}