console.log('hello there')

const axios = require('axios')


let baseURL = 'https://traceability-lab-yeah.herokuapp.com'
let button = document.querySelector('button')

function criticalBtn() {
    axios.get(baseURL + '/critical')
    .then(res => {
        console.log(res.body)
    })
    .catch(err =>{
        console.error(err)
    })
}

button.addEventListener('click', criticalBtn())