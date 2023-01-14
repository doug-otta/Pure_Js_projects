// setting the counter = 0
let count = 0

const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

let value = document.querySelector('#value')

decrease.addEventListener('click', function(){
    value.textContent = count--
})

reset.addEventListener('click', function(){
    value.textContent = 0
    count = 0
})

increase.addEventListener('click', function(){
    value.textContent = count++
})