'use strict';
// 1.1 Create a list of books
const favoriteBooks = [
  'caste',
  'the_glass_hotel ',
  'a_kind_of_spark',
  'the_zahir',
  'boy_parts',
  'the_ministry_for_the_future ',
  'piranesi ',
  'real_life',
  'wow_no_thank_you',
  'the_lying_life_of_adults',
];

//1.4 Object in each book
const books = {
  caste: {
    title: 'Caste',
    language: 'English',
    author: 'Tom Straw',
  },
  the_glass_hotel: {
    title: 'The glass hotel',
    language: 'English',
    author: 'Emily St. John Mandel',
  },
  a_kind_of_spark: {
    title: 'A kind of spark',
    language: 'English',
    author: 'Elle McNicoll',
  },
  the_zahir: {
    title: 'The Zahir',
    language: 'Portuguese',
    author: 'Paulo Coelho',
  },
  boy_parts: {
    title: 'Boy parts',
    language: 'English',
    author: 'Eliza Clark',
  },
  boy_parts: {
    title: 'Boy parts',
    language: 'English',
    author: 'Eliza Clark',
  },
  the_ministry_for_the_future: {
    title: 'The Ministry for the Future',
    language: 'English',
    author: 'Kim Stanley Robinson',
  },
  piranesi: {
    title: 'Piranesi',
    language: 'Italian',
    author: 'Susanna Clarke',
  },
  real_life: {
    title: 'Real Life',
    language: 'English',
    author: 'Brandon Taylor',
  },
  wow_no_thank_you: {
    title: 'Wow, No Thank You',
    language: 'English',
    author: 'Samantha Irby',
  },
  the_lying_life_of_adults: {
    title: 'The Lying Life of Adults',
    language: 'Italian',
    author: 'Elena Ferrante',
  },
};

//1.5
function createBooks(obj) {
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'books__section');
  for (let key in obj) {
    const bookCard = document.createElement('li');
    bookCard.setAttribute('class', 'book__card');
    bookCard.setAttribute('id', key);

    const bookTitle = document.createElement('h1');
    bookTitle.innerHTML = obj[key].title;
    bookCard.appendChild(bookTitle);

    const bookLanguage = document.createElement('p');
    bookLanguage.innerHTML = obj[key].language;
    bookCard.appendChild(bookLanguage);

    const bookAuthor = document.createElement('p');
    bookAuthor.innerHTML = obj[key].author;
    bookCard.appendChild(bookAuthor);
    ul.appendChild(bookCard);
  }
  console.log(ul);
  document.getElementById('book__list').appendChild(ul);
}
createBooks(books);

//Books cover
let bookCover = {
  caste:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRac1Gjg-cvUHTWa0BU_R4TABHiTPp4CFGtnUTlEn63LXjHOu82bkF9KiqOQw&usqp=CAc',

  the_glass_hotel:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvI0De6hBn03xKeg_ho6QVbHOK12zI0h5gqQ&usqp=CAU',

  a_kind_of_spark:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpxuZGVUOpas5WS6LW2zTazBFZxmTW2EutQ&usqp=CAU',

  the_zahir:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCRVLKV8r58JjBtyLImTh_VrgNSYqYO8SA_dYWo3FOhqdOW_Ma&usqp=CAc',

  boy_parts:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fqasOnL3giV2eqHvEtvDMtjQYB_cMod6Xw&usqp=CAU',

  the_ministry_for_the_future:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_79h3slh2yAuGawJb18UcPJEr-f6R6VpEJUy7eLHm0Nd0MJstBbyHv1C3rsdNlPX0V77NeM0&usqp=CAc',

  piranesi:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTpQZA9FjqCC22Q43Wnc1hHNpU6T93UzH908LbJkYzbBODxdX5-f4mpVsuSLY&usqp=CAc',

  real_life:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZBOJqR2uMdPqo8YmyDbtAKIonkwA9I0b1NckRaZK2FqHrcMpHqlRjFyQjdgHkqU_xS_DwzUn&usqp=CAc',

  wow_no_thank_you:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY-GrYxO5OaQUfxnr93UCzIv04MBfhgaX9Aw&usqp=CAU',

  the_lying_life_of_adults:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOzsOUfG_EvRSfn3gfFaTqJOp-y9d-zA_wVQ&usqp=CAU',
};

//1.6 Function with images
function createBooksCard(obj) {
  for (const key of Object.keys(obj)) {
    const img = document.createElement('img');
    img.setAttribute('class', 'book__image');
    img.src = bookCover[key];
    img.alt = key;
    document.getElementById(key).prepend(img);
  }
}
createBooksCard(bookCover);
