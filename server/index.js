const express = require('express')
const path = require('path')
const app = express()

// app.use(express.static('client'))

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '3632c213ce864b659af5aa3439cd2e27',
    captureUncaught: true,
    captureUnhandledRejections: true
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
    rollbar.info("HTML is doing fine")
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 6969
app.listen(port, ()=>{console.log(`Hello There! on ${port}`)})