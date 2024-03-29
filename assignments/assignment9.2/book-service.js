const fs = require('fs').promises;
const path=require('path');


const dbPath=path.join(__dirname,'db','books.json');

let books=[];

const loadBooks=async()=>{

    const data=await fs.readFile(dbPath);
    books=JSON.parse(data);
    
}

const saveBooks=async()=>{
    await fs.writeFile(dbPath, JSON.stringify(books,null,4));
}


const getAllBooks=()=>{
    return books;
}

const getBookByIsbn=(isbn)=>{
    return books.find(book => book.isbn==isbn);

}

const addBook=async (book)=>{
    books.push(book);
    await saveBooks();
}

const updateBook=async (book)=> {
    books = books.filter(b => !(b.isbn === book.isbn));
    await addBook(book);
}

const deleteBook=async(isbn)=> {
    books = books.filter(b => !(b.isbn === isbn));
    await saveBooks();
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    loadBooks,
    updateBook,
    deleteBook
}
