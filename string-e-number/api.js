// https://digimon-api.vercel.app/api/digimon

let url = 'https://digimon-api.vercel.app/api/digimon'
fetch( url)
.then((data) => data.json() )
.then((data) => digimons(data) )

function digimons (data){

  for(digimon of data){
    let container = `
    <div class="container">
    <div>${digimon.name}</div>
    </div>
    `
    document.write(container)
  }
}

