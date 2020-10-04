const router = require('express').Router();
const { getAllUsers, getUserById } = require('../controllers/users');

router.get('/users/:id', getUserById);

router.get('/users', getAllUsers);

module.exports = {
  router,
};
