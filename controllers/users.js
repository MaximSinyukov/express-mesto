const path = require('path');
const { getJsonFromFile } = require('../helpers/readFile');

const getAllUsers = (req, res) => {
  getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if (!data) {
        res
          .status(500)
          .send({ message: 'Ошибка считывания файла' });
        return;
      }
      res
        .status(200)
        .send(data.users);
    });
};

const getUserById = (req, res) => {
  getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
    .then((data) => {
      if (!data) {
        res
          .status(500)
          .send({ message: 'Ошибка считывания файла' });
        return;
      }
      const foundUser = data.users.find((c) => c._id === req.params.id);
      if (!foundUser) {
        res
          .status(404)
          .send({ message: 'Нет пользователя с таким id' });
      }
      res
        .status(200)
        .send(foundUser);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
};
