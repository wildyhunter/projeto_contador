const btn_adicionar = document.querySelector("#btn_adicionar")
const btn_subtrair = document.querySelector("#btn_subtrair")
const currentNumber = document.querySelector("#currentNumber")


let num = 0
btn_adicionar.addEventListener('click', (evento)=>{
    num++
    if(num > 0){
        currentNumber.style.color = 'darkgreen'
    }
    currentNumber.innerHTML = num
    console.log(num)
})
btn_subtrair.addEventListener('click', (evento)=>{
    num --
    if(num < 0){
        currentNumber.style.color = 'red'
    }
    currentNumber.innerHTML = num
})