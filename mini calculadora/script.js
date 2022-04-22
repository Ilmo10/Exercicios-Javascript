function calcular(){
  let operador = document.getElementById('operador').value
  let valor1 = parseFloat(document.getElementById('valor1').value) 
  let valor2 = parseFloat(document.getElementById('valor2').value)

  let resultado = document.getElementById('resultado')
  if(operador === ''){
    alert('Seu Burro')
  } else if(operador === '*'){
    resultado.innerHTML = valor1 * valor2
  } else if(operador === '/'){
    resultado.innerHTML = valor1 / valor2
  }else if(operador === '-'){
    resultado.innerHTML = valor1 - valor2
  }else if(operador === '+'){
    resultado.innerHTML = valor1 + valor2
  }else{
    alert('Atenção! è necessario esolher um operador valido.')
  }

}




