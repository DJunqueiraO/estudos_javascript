const interval = 1 // seconds

setInterval(() => {
    console.log(`${console.log(__filename)} - current time is ${new Date().toLocaleTimeString()}`);
    
}, interval*1000)