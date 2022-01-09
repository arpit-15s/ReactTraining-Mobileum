const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

//write a require for each your model like below
require("./models/books")(sequelize);
require("./models/authors")(sequelize);
require("./models/users")(sequelize);

const setup = async () => {
  //automatically create the tables if not exists
  //force true will drop table and recreate
  await sequelize.sync({
    // force: true, //this will drop current tables and reacreate them
  });
};

// const {Authors, Books, Users} = sequelize.models;

// const addAuthor = async (author) => {
//     console.log('\n', await Author.create(author));
// }

// addAuthor({id: '1', name: 'Vivek Dutta Mishra', photograph: 'https://thelostepic.com/wp-content/uploads/2021/12/vivek-author-square.jpg', biography: 'By profession, I am a Software Technology Enabler — a self-professed title. In this role, I enable the software companies to develop better software designs, build robust architecture, and most importantly, make effective software professionals. I have over two decades of experience as a speaker, influencer and educator with a impressive clientele includes the likes of TCS, Mercedes, GE, Mindtree, CISCO, HP, JPMorgan, BNP Paribas, Honeywell, L&T, Walmart, Siemens, Capgemini … But long before associating with software technology, I have been passionate about Indian history and epics and did an extensive study on the subject. Armed with a firm conviction about the superiority of ancient pre-historic literature, over history, he has scripted and directed stage shows such as Ramlila to show various perspectives of the great epic. I am also the author of an Epic Series, based on Mahabharat, titled — The Lost Epic. The first book of the series — The Accursed God is avaialble since Jan 2020. You can find more information about the series on The Accursed God'});
// addAuthor({id: '2', name: 'J.K. Rowling', photograph: 'https://api.time.com/wp-content/uploads/2020/09/jk-rowling-troubled-blood-trans-writers.jpg?quality=85&crop=0px%2C146px%2C3548px%2C1857px&resize=1200%2C628&strip, biography: Joanne Rowling, CH, OBE, HonFRSE, FRCPE, FRSL (/ˈroʊlɪŋ/ ROH-ling;[1] born 31 July 1965), known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, and screenwriter. She is the author of the Harry Potter series, which has won multiple awards and sold more than 500 million copies as of 2018,[2] and became the best-selling book childrens series in history in 2008.[3] The books are the basis of a popular film series. She also writes crime fiction under the pen name Robert Galbraith. Born in Yate, Gloucestershire, Rowling was working as a researcher and bilingual secretary for Amnesty International in 1990 when she conceived the idea for the Harry Potter series while on a delayed train from Manchester to London. The seven-year period that followed saw the death of her mother, birth of her first child, divorce from her first husband, and relative poverty until the first novel in the series, Harry Potter and the Philosophers Stone, was published in 1997. There were six sequels, of which the last was released in 2007. Since then, Rowling has written several books for adult readers: The Casual Vacancy (2012) and—under the pseudonym Robert Galbraith—the crime fiction Cormoran Strike series. In 2020, her "political fairytale" for children, The Ickabog, was released in instalments in an online version'});
// addAuthor({id: '3', name: 'Agatha Christie', photograph: 'https://m.media-amazon.com/images/M/MV5BMTU3OTYzMzY4NV5BMl5BanBnXkFtZTcwMDIxOTIyOA@@._V1_.jpg', biography: 'Dame Agatha Mary Clarissa Christie, Lady Mallowan, DBE (née Miller; 15 September 1890 – 12 January 1976) was an English writer known for her 66 detective novels and 14 short story collections, particularly those revolving around fictional detectives Hercule Poirot and Miss Marple. She also wrote the worlds longest-running play, The Mousetrap, which was performed in the West End from 1952 to 2020, as well as six novels under the pseudonym Mary Westmacott. In 1971, she was made a Dame (DBE) for her contributions to literature. Guinness World Records lists Christie as the best-selling fiction writer of all time, her novels having sold more than two billion copies.'});

// const getAllBooks = async () => {
//     console.log('\n', await Book.findAll());
// };
// getAllBooks();

// const getAllAuthor = async () => {
//     console.log('\n', await Author.findAll());
// };
// getAllAuthor();

module.exports = { setup };
