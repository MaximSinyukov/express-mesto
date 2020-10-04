const express = require('express');

const app = express();
const path = require('path');
const userRouter = require('./routes/users').router;
const cardRouter = require('./routes/cards').router;
const otherRouter = require('./routes/other').router;

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  userRouter,
  cardRouter,
  otherRouter,
);

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
