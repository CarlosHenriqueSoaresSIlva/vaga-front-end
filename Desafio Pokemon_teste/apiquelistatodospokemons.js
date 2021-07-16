function loadpk() {
 let url = 'https://pokeapi.co/api/v2/pokemon/';
 fetch(url)
 .then((response) => {
 return response.json();
 })

 .then((data) => {
  console.clear();
console.log(data)
document.getElementById('nome').innerHTML = data ['name'];
document.getElementById('numero').innerHTML = data ['id'];
let img = data['sprites']['font_default'];
document.getElementById('pic').setAttribute('src' , img);
 })
 .catch((erro) => {
console.log("Erro:" + erro);

 });
}

document.getElementById('brt').onclick = loadpk;

