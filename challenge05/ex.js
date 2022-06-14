/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array) {
  return array;
}

myFunction(array);

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(array)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(param1, param2) {
  return param1[param2];
}

myFunction2(array, 4);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = [0, "1", true, null, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunction(array2);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
  var obj = {
    livroBe: { quantidadePaginas: 10, autor: "Bê", editora: "Publica" },
    livroJess: { quantidadePaginas: 20, autor: "Jess", editora: "Edit" },
    livroGlayson: {
      quantidadePaginas: 30,
      autor: "Glayson",
      editora: "Scipione",
    },
  };

  if (bookName == undefined) {
    return obj;
  } else if (bookName == "livroBe") {
    return [
      obj.livroBe,
      `O livro ${bookName} tem ${obj.livroBe.quantidadePaginas} páginas!`,
      `O autor do livro ${bookName} é ${obj.livroBe.autor}.`,
      `O livro ${bookName} foi publicado pela editora ${obj.livroBe.editora}.`,
    ];
  } else if (bookName == "livroJess") {
    return [
      obj.livroJess,
      `O livro ${bookName} tem ${obj.livroBe.quantidadePaginas} páginas!`,
      `O autor do livro ${bookName} é ${obj.livroJess.autor}.`,
      `O livro ${bookName} foi publicado pela editora ${obj.livroJess.editora}.`,
    ];
  } else if (bookName == "livroGlayson") {
    return [
      obj.livroGlayson,
      `O livro ${bookName} tem ${obj.livroBe.quantidadePaginas} páginas!`,
      `O autor do livro ${bookName} é ${obj.livroGlayson.autor}.`,
      `O livro ${bookName} foi publicado pela editora ${obj.livroGlayson.editora}.`,
    ];
  } else {
    return "Livro não encontrado.";
  }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
book("livroBe")[1];

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
book("livroBe")[2];

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
book("livroBe")[3];
