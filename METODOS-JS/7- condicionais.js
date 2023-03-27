console.log(`\n\n Trabalhando com condicionais\n\n`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
);
const idadeComprador = 22;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Vilhena";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18){
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1,1); //splice remove itens.
// }else if(estaAcompanhada){
//         console.log("Comprador está acompanhado");
//         listaDeDestinos.splice(1,1); //splice remove itens.

//     }else{
//         console.log("Não é maior de idade");
//     }


console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino existe:", destinoExiste);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe, tivemos um erro!");
}
// { // || means "ou"
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(2, 1); //splice remove itens.
//     temPassagemComprada = true;
// } else {
//     console.log("Não é maior de idade");
//     temPassagemComprada = false;
// }

for (let cont = 0; cont < 3; cont++) {        // cont é = ao i
    if (listaDeDestinos[contador] == destino) {
        destinoExiste == true;
    }

}