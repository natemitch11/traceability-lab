console.log('hello there')

let baseURL = 'https://traceability-lab-yeah.herokuapp.com'
let button = document.querySelector('button')


button.addEventListener('click', ()=>{
   console.log('click')
    axios.get(baseURL + '/critical')
    .then(res => {
        console.log(res.data)
    })
    .catch(err =>{
        console.error(err)
    }) 
})