const os = require('os')

const user = os.userInfo()
console.log(`Hello ${user.username}, welcome to the Node.js course!`)

const uptime = os.uptime()
console.log(`\nThe system has been running for ${Math.floor(uptime)} seconds.\n`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()
}
console.log(`Current OS: ${currentOS.name} ${currentOS.release}, Total Memory: ${Math.floor(currentOS.totalMem / 1024 / 1024)} MB`)

