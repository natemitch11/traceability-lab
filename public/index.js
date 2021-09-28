console.log('hello there')

let baseURL = 'https://traceability-lab-yeah.herokuapp.com'
let button = document.querySelector('button')

function criticalBtn() {
    console.log('click')
    axios.get(baseURL + '/critical')
    .then(res => {
        console.log(res.body)
    })
    .catch(err =>{
        console.error(err)
    })
}

button.addEventListener('click', criticalBtn())