module.exports.getAllTools = (req, res, next) => {
  // const {ip, baseUrl, hostname, header, body, ips} =req;
  // console.log(ip, baseUrl, hostname, header, body, ips)
  res.download(__dirname, "/tools.controller.js")
}

module.exports.savaATools = (req, res) => {
  res.send("Post tools found!")
}
