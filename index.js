const http = require('http');
const other = require('./others')
const url = require('url')
const fs = require('fs')

// const server = http.createServer(function(req, res){

//   const address_url = 'http://localhost:5000/contact?name=fahim&address=chanpur'
//   const parsed_url = url.parse(address_url, true)

//   const queryObject = parsed_url.query
//   console.log(queryObject);

// });

// server.listen(5000); 

// const res = other.subtract(10,4)
// console.log(res);

const server = http.createServer((req, res) => {

  //Exploring file system module  
  if(req.url=="/") {

    // Asynchronously 

    // fs.readFile('data.txt', (err, data) => {
    //   if (err) {
    //     res.write("Failed to Read Data!")
    //     res.end()
    //   } 
    //   else{
    //     res.write(data)
    //     res.end()
    //   }
    // })


    // Synchronously 

    // const data = fs.readFileSync('data.txt')
    // res.write(data)
    // res.end()

    // Data write system 

    fs.writeFile('newData.txt', 'Hello Node.js!', (err) => {
      if (err) {
        res.write("Data failed to write!")
        res.end()
      } else {
        res.write("Data Successfully Written")
        res.end()
      }
    })
  }
  else if(req.url=="/contact") {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>This is contact page</h1>")
    res.end()
  }
  else{
    res.writeHead(404, {'Content-Type':'text/html'})
    res.write("<h1>This page is not found</h1>")
    res.end()
  }
})

const PORT = 5000;
server.listen(PORT, console.log(`server is running port ${PORT}`))