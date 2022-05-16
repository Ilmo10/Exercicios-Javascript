let link = 'https://viacep.com.br/ws/14401248/json/'


function buscarCep(){
  let elem = document.getElementById('endereco')
  elem.innerHTML = ``


  let el = document.getElementById("loading")
  el.innerHTML = '<img src="https://c.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" height="30" alt="">'

  let input = atualizaInput()
  apiCep(input)
  console.log(input)




}
function atualizaInput (){
 return document.getElementById('cep').value
}

function apiCep(input){
  fetch(`https://viacep.com.br/ws/${input}/json/`)
  .then(response => response.json() )
  .then(response => serealizaCep(response))
  .catch(error => erro(error))
}
function erro(error){
let elError = document.getElementById("endereco")
let el = document.getElementById('loading')
elError.innerHTML = "Não encontramos seu cep, insira um correto."
el.innerHTML = ``
}




function serealizaCep(data){
  console.log(data)
  let el = document.getElementById('endereco')
  let elLoading = document.getElementById("loading")
  elLoading.innerHTML=``
  el.innerHTML = ` 
  Rua: ${data.logradouro} <br/>
  Bairro: ${data.bairro} <br/>
  cidade: ${data.localidade} <br/>
  Cep: ${data.cep} <br/>
  Estado: ${data.uf} <hr/>
  `
}

