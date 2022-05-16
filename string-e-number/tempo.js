let listFruta = [
  "Abacate", //0
  "Limão", //1
  "Laranja", //2
  "Uva", //3
  "Goaiaba", // 4
  "Mamão", // 5
  "Manga", // 6
  "Acerola", // 7
  "lima", // 8
  "maça", //
];

//in // index // console.log(arr[i])
//of // valor // console.log(i)

//document.write('sadhaksj <br/>')
const input = prompt("escolha um suco");



function run(input) {
 for (lista in listFruta) {
    if (listFruta[lista] == input) {
      console.log('entrei if')
      return "temos suco de " + listFruta[lista] + " codigo:" + lista + "<br/>";
    }
  }
  return 'não foi encontrado '+ input
}

let test = run(input)
document.write(test);

//for(lista of listFruta){
//document.write(lista, '<br/>')
//}

//for(lista in listFruta){
//document.write('gostaria de tomar um suco de '+ lista + ' - ' + listFruta[lista] + ' por favor <br/>' )
//}

// let i = 0
// function print () {
//   console.log(arr[3]) //0 //1 //2 //3

//   i++ // 1 //2 //3 //4

// }

// setInterval(() => print() ,1000) //for
