let btn  =  document.getElementById('btn')


function periodoDoDia(){
  let dia  =  document.getElementById('dia')
  let classQEstaNoElemento = dia.className
  if(classQEstaNoElemento === 'dia'){
    dia.classList.remove('dia')
    dia.classList.add('noite')
  }else{
    dia.classList.remove('noite')
    dia.classList.add('dia')
  }
  console.log(dia)

}