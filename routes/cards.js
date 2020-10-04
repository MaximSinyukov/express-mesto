const router = require('express').Router();
const { getAllCards } = require('../controllers/cards');

router.use('/cards/:id', (req, res) => {
  res.status(200).send('&&&');
});

router.use('/cards', getAllCards);

module.exports = {
  router,
};
