module.exports.getAllTools = (req, res, next) => {
  // const {ip, baseUrl, hostname, header, body, ips} =req;
  // console.log(ip, baseUrl, hostname, header, body, ips)
  // res.download(__dirname, "/tools.controller.js")

  res.send("tools found")
}

module.exports.savaATools = (req, res) => {
  res.send("Post tools found!")
}

module.exports.getToolDetail = (req, res) => {
  res.send("tool details found")
}
