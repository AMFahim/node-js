function ErrorHandler(error) {
  const {name, message, stack} = error
  console.log(name, message)
}

module.exports = ErrorHandler;