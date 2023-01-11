const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector('button')
const color = document.querySelector('.color')
let colorName = document.querySelector('span h2')

btn.addEventListener('click', changeBackgroundColor)

function changeBackgroundColor(){
    // get random number between 0 - 3
    const randomNumber = Math.floor(Math.random()*colors.length)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
}