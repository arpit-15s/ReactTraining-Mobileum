function Book(title, author, price, rating){
    this.title = title;
    this.author = author;
    this.price = price;
    this.rating = rating;
}

let bookCollection = [];

bookCollection.push(new Book('cosmos', 'james', 200, 4.3));
bookCollection.push(new Book('Science', 'richhie', 250, 4.3));
bookCollection.push(new Book('Maths', 'Risabh', 300, 4.7));
bookCollection.push(new Book('Geography', 'Clive', 100, 4.5));
bookCollection.push(new Book('computer', 'jonny', 300, 4.9));

let bookManager = {
    addBook: (book) => {
        bookCollection.push(book);
    },

    getAllBook: () => {
        return bookCollection;
    },

    getBooksByAuthor: (author) => {
        let bookOfSameAuthor = []
        for(let i of bookCollection){
            if(i.author === author){
                bookOfSameAuthor.push(i.name);
            }
        }
        return bookOfSameAuthor;
    },

    getBooksInPriceRange: (min, max) => {
        let bookInPriceRange = []
        for(let i of bookCollection){
            if(i.price >= min && i.price <= max){
                bookInPriceRange.push(i.name);
            }
        }
        return bookInPriceRange;
    },

    getBooksWithRatingabove: (rating) => {
        let booksWithRatingabove = []
        for(let i of bookCollection){
            if(i.rating >= rating){
                booksWithRatingabove.push(i.name);
            }
        }
        return booksWithRatingabove;
    }
}
