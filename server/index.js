const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: '422e1fbe471b4e6cb873d26b98cebbd2',
    captureUncaught: true,
    captureUnhandledRejections: true
});
const app = express()

app.use(express.static('client'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '.client/index.html'))
    rollbar.info("HTML is doing fine")
})

app.get('/pokemon', (req, res)=>{
    findPokemon()
})

app.use(rollbar.errorHandler())

const port = process.env.PORT || 6969
app.listen(port, console.log(`Hello There! on ${port}`))