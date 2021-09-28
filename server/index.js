const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('client'))
app.use(express.json())

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '3632c213ce864b659af5aa3439cd2e27',
    captureUncaught: true,
    captureUnhandledRejections: true
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../client/index.html'));
    rollbar.info("HTML is doing fine");
})

app.get('/pokemon', (req, res)=>{
    try{
        findPokemon()
    } catch (error){
        res.status(503)
        rollbar.error("Endpoint Error Is HERE")
    }
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 6969
app.listen(port, ()=>{console.log(`Hello There! on ${port}`)})