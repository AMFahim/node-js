const http = require('http');
const other = require('./others')

// var server = http.createServer(function(req, res){

//   console.log("server is running")

// });

// server.listen(5000); 

// const res = other.subtract(10,4)
// console.log(res);

const server = http.createServer((req, res) => {
  if(req.url=="/") {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>This is home page</h2>")
    res.end()
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