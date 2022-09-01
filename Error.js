const ErrorHandler = require("./ErrorHandler.js")

async function getData() {
  try{
    // undefined.find();
    const EmailError = new Error("Email Already Exists!");
    throw EmailError;
  } catch(error) {
    ErrorHandler(error)
  }
}
getData()



console.log("done")