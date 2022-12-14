const livros = require("./livros");
const maisBarato = require("./maisBarato");
const troca = require("./troca");

function seletionSort(lista) {

    lista.forEach((_, indice) => {
        let menorValor = maisBarato(lista, indice);
        troca(lista, menorValor, indice);    
    }); 
    console.log(lista);
}

seletionSort(livros);








// for (let atual = 0; atual < livros.length; atual++){
//     let menorValor = maisBarato(livros, atual);

//     let livroAtual = livros[atual];
//     console.log('posição atual:', atual);
//     console.log('livro atual:', livros[atual]);

//     let livroMaisBarato = livros[menorValor];
//     console.log('posição mais barato:', menorValor);
//     console.log('livro mais barato:', livros[menorValor]);
//     livros[atual] = livroMaisBarato;
//     livros[menorValor] = livroAtual;
// }

