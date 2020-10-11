const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users').router;
const cardRouter = require('./routes/cards').router;
const otherRouter = require('./routes/other').router;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

const { PORT = 3000 } = process.env;

app.use((req, res, next) => {
  req.user = {
    _id: '5f832495dfaf3c3354317f9a',
  };

  next();
});

app.use(
  userRouter,
  cardRouter,
  otherRouter,
);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
