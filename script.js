/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

// número de categorias
function countCategories() {
  let noc = booksByCategory.length;
  return console.log(`Temos ao total, ${noc} categorias.`);
}

// número total de livros
function countBooks() {
  let totalLength = [];
  for (let categories of booksByCategory) {
    totalLength.push(categories.books.length);
  }
  let finalLength = 0
  for (index in totalLength) {
     finalLength += totalLength[index]
  }
  console.log(`Temos ao total, ${finalLength} livros.`)
}

// conta o número total de autores diferentes
function countAuthors() {
  let totalAuthors = [];
  for (let categories of booksByCategory) {
    for (book of categories.books) {
      if (totalAuthors.indexOf(book.author) == -1) {
        totalAuthors.push(book.author);
      }
    }
  }
  return console.log(
    `Temos ao total, ${totalAuthors.length} autores.`
  );
}

// busca livros por nome do autor como parâmetro
function searchAuthor(param) {
  console.log(`${param} escreveu:`);
  for (let categories of booksByCategory) {
    for (book of categories.books) {
      if (book.author === param) {
        console.log("-", book.title);
      }
    }
  }
}

countCategories();
countBooks();
countAuthors();
searchAuthor('Augusto Cury')