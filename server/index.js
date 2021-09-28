const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('client'))
app.use(express.json())

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '535611294be747d5b0875c87cbd54708',
    captureUncaught: true,
    captureUnhandledRejections: true
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
    rollbar.info("These are not the Droids you are looking for")
})

app.get('/pokemon', (req, res)=>{
    try{
        findPokemon()
    } catch (error){
        res.status(500)
        rollbar.error("Endpoint Error Is HERE")
    }
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 6969
app.listen(port, ()=>{console.log(`Hello There! on ${port}`)})