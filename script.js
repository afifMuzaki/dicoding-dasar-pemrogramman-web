const allBooks = [
    {
        id: 1,
        judul: "The ABC Murders",
        penulis: "Agatha Christie",
        sinopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo reiciendis deleniti eaque ea laborum, omnis nemo rerum enim nam.",
        cover: "abc_murders.jpg",
        recommend: true
    },
    {
        id: 2,
        judul: "Harry Potter and the Prisoner of Azkaban",
        penulis: "J.K. Rowling",
        sinopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo reiciendis deleniti eaque ea laborum, omnis nemo rerum enim nam.",
        cover: "harry_potter_3.jpg"
    },
    {
        id: 3,
        judul: "Sebuah Seni Untuk Bersikap Bodo Amat",
        penulis: "Mark Manson",
        sinopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo reiciendis deleniti eaque ea laborum, omnis nemo rerum enim nam.",
        cover: "sebuah-seni-untuk.jpg",
        recommend: true
    },
    {
        id: 4,
        judul: "Sejarah Dunia yang Disembunyikan",
        penulis: "Jonathan Black",
        sinopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo reiciendis deleniti eaque ea laborum, omnis nemo rerum enim nam.",
        cover: "sejarah.jpg"
    },
    {
        id: 5,
        judul: "A Study In Scarlet",
        penulis: "Arthur Conan Doyle",
        sinopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo reiciendis deleniti eaque ea laborum, omnis nemo rerum enim nam.",
        cover: "a_study_in_scarlet.jpg",
        recommend: true
    },
    {
        id: 6,
        judul: "The Hobbit",
        penulis: "J.R.R. Tolkien",
        sinopsis: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo reiciendis deleniti eaque ea laborum, omnis nemo rerum enim nam.",
        cover: "the_hobbit.jpg"
    }
];

const booksContainer = document.querySelector('#books div.container');
const recomContainer = document.querySelector('#recomendation div.container');
const nav = document.querySelector('nav');

function getAllBooks(books) {
    books.map(book => {
        const x = setCard(book);
        booksContainer.appendChild(x);
    });
}

function getAllRecomBooks(books) {
    books.filter(recomBooks => recomBooks.recommend === true)
    .map(book => {
        const x = setRecomCard(book);
        recomContainer.appendChild(x);
    });
}

function setCard(book) {
    const card = document.createElement('article');
    card.setAttribute('id', book.id)

    const cardContent = `<img class="cover" src="./img/${book.cover}" alt="${book.judul}" />
            <div class="card-body">
                <h4 class="card-title">
                    ${book.judul}
                </h4>
                <p class="author">${book.penulis}</p>
                <p class="synopsis">
                    ${book.sinopsis}
                </p>
                <button class="card-btn">Lihat Buku</button>
            </div>`;

    card.innerHTML = cardContent;
    return card;
}

function setRecomCard(book) {
    const card = document.createElement('article');

    const cardContent = `<img
                            class="cover-rec"
                            src="./img/${book.cover}"
                            alt="${book.judul}"
                        />`;

    card.innerHTML = cardContent;
    return card;
}

getAllBooks(allBooks);
getAllRecomBooks(allBooks);

booksContainer.previousElementSibling.lastElementChild.onclick = function() {
    const allBookCards = document.querySelectorAll('#books article');

    let inputValue = this.previousElementSibling.value;
    let expression = `.*${inputValue}.*`;
    let re = new RegExp(expression, 'gi');

    let results = allBooks.filter(book => book.judul.match(re) || book.penulis.match(re));

    allBookCards.forEach((card) => {
        booksContainer.removeChild(card);
    });

    results.map(result => {
        const card = setCard(result);
        booksContainer.appendChild(card);
    });
}

nav.onclick = function(e) {
    document.querySelectorAll('li[active]')
    .forEach(li => li.removeAttribute('active'));

    e.target.setAttribute('active','');
}