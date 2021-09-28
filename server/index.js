const express = require('express')
const path = require('path')
const app = express()

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '80fa49bd6edf4db78eb1fb61a73f0694',
    captureUncaught: true,
    captureUnhandledRejections: true
});

app.use(express.static('client'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
    rollbar.info("HTML is doing fine")
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 6969
app.listen(port, ()=>{console.log(`Hello There! on ${port}`)})