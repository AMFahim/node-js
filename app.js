const express = require("express");
const app = express();
const cors = require("cors");
const mongoose  = require("mongoose");

// middleware 
app.use(express.json());
app.use(cors());


// Schema design 

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please provide a name for this product"],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [100, "Name is too large."]
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be negative"],
  },
  unit: {
    type: String,
    required: true,
    enum: {
      values: ["kg", "liter", "pcs"],
      message: "unit value can't be {VALUE}, must be kg/liter/pcs"
    }
  },
  quantity: {
    type: Number,
    required: true,
    min: [0, "Quantity cant be negative"],
    validate: {
      validator: (value) => {
        const isInteger = Number.isInteger(value);
        if(isInteger) {
          return true
        } else {
          return false
        }
      }
    },
    message: "quantity must be an integer"
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["in-stock", "out-of-stock", "discontinued"],
      message: "Status can't be {VALUE}"
    }
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now
  // },
  // updatedAt: {
  //   type: Date,
  //   default: Date.now
  // }

  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier"
  },
  categories: [{
    name: {
      type: String,
      required: true
    },
    _id: mongoose.Schema.Types.ObjectId
  }]
}, {timeStamps: true})


//Mongoose middleware for saving data: pre/post

productSchema.pre('save', function(next){
  console.log('Before saving Data')
  if(this.quantity == 0 ) {
    this.status = 'out-of-stock'
  }
  next()
})

// productSchema.post('save', function(doc, next) {
//   console.log('After Saving Data');
//   next()
// })

productSchema.methods.logger = function(){
  console.log(`Data Saved for ${this.name}`)
}


//SCHEMA --> MODEL --> QUERY


const Product = mongoose.model('Product', productSchema);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//posting to database

app.post('/api/v1/product', async(req, res, next) => {
  // res.send("It is working")

  try {

    // create 
    // const result = await Product.create(req.body)

     //Save
    const product = new Product(req.body);

    const result = await product.save();
    result.logger()

    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully",
      data: result
    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data didn't saved",
      data: error.message
    })
  }
})


module.exports = app;
