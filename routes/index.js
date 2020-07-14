const routes = require('express').Router();

const getUsers = require('./users');
const getCards = require('./cards');

routes.use('/users', getUsers);
routes.use('/cards', getCards);

routes.all('/*', (req, res) => {
  res.status(404).json({ message: 'Запрашиваемый ресурс не найден' });
});

module.exports = routes;
