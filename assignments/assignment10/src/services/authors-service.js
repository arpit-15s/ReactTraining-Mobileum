const { sequelize } = require("../data/connection");

const { Authors, Books } = sequelize.models;

const getAllAuthors = async () => {
  const author = await Authors.findAll();
  if (author) return author;
  else throw new Error("Could not find any Entry");
};

const addAuthors = async (author_data) => {
  const author = await Authors.create(author_data);
  if (author) return author;
  else throw new Error("Could not add in Database");
};

const getAuthorById = async (id) => {
  const author = await Authors.findOne({ where: { id: id } });
  if (author) return author;
  else throw new Error(`Could not find any Entry with Id = ${id}`);
};

const updateAuthor = async (author) => {
  await Authors.destroy({
    where: {
      id: author.id,
    },
  });
  return await addAuthors(author);
};

const deleteAuthor = async (id) => {
  const author = await Authors.destroy({
    where: {
      id: id,
    },
  });
  return author;
};

const getBooksByAuthor = async (id) => {
  const author = await Authors.findOne({
    where: {
      id: id,
    },
  });

  const author_name = author.name;
  
  return await Books.findAll({
    where: {
      author: author_name
    },
  });

};

module.exports = {
  getAllAuthors,
  addAuthors,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthor,
};
