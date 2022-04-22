let element = document.getElementById('elemento')
let valorDiv = element.innerText
let element2 = document.getElementById('elemento2')
let resultado = document.getElementById('resultado')

console.log(resultado)
let valor1 = 1
let valor2 = 2
let result= valor1 + valor2
console.log(result)
resultado.innerHTML = result

resultado.style.background = "red"
resultado.classList.add('resultado')
console.log(resultado)
//console.log(valorDiv)

