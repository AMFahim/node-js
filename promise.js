const myPromise = new Promise((resolve, reject) => {
  const user = {id: 1};
  if (!user) {
    reject("something went wrong")
  } else {
    setTimeout(() => {
      resolve("He is valid user")
    }, 1000)
  }
})

myPromise
 .then(res => console.log("resolve", res))
 .catch(err => console.log("reject", err))