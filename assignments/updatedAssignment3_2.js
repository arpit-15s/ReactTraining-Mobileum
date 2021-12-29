function Book(title, author, price, rating){
    this.title = title;
    this.author = author;
    this.price = price;
    this.rating = rating;
}

let bookCollection = [];

bookCollection[bookCollection.length] = new Book('cosmos', 'james', 200, 4.3);
bookCollection[bookCollection.length] = new Book('Science', 'richhie', 250, 4.3);
bookCollection[bookCollection.length] = new Book('Maths', 'Risabh', 300, 4.7);
bookCollection[bookCollection.length] = new Book('Geography', 'Clive', 100, 4.5);
bookCollection[bookCollection.length] = new Book('computer', 'jonny', 300, 4.9);

let bookManager = {
    addBook: (book) => {
        bookCollection[bookCollection.length] = book;
    },

    getAllBook: () => {
        return bookCollection;
    },

    getBooksByAuthor: (author) => {
        let bookOfSameAuthor = []
        for(let i of bookCollection){
            if(i.author === author){
                bookOfSameAuthor[bookOfSameAuthor.length] = i.title;
            }
        }
        return bookOfSameAuthor;
    },

    getBooksInPriceRange: (min, max) => {
        let bookInPriceRange = []
        for(let i of bookCollection){
            if(i.price >= min && i.price <= max){
                bookInPriceRange[bookInPriceRange.length] = i.title;
            }
        }
        return bookInPriceRange;
    },

    getBooksWithRatingabove: (rating) => {
        let booksWithRatingabove = []
        for(let i of bookCollection){
            if(i.rating >= rating){
                booksWithRatingabove[booksWithRatingabove.length] = i.title;
            }
        }
        return booksWithRatingabove;
    }
}

console.log(bookCollection);
console.log(bookManager.getBooksInPriceRange(100, 250));
console.log(bookManager.getBooksWithRatingabove(4));
