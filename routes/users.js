const getUsers = require('express').Router();
const users = require('../data/users');

getUsers.get('/:id', (req, res) => {
  const user = users.find(({ _id: id }) => id === req.params.id);
  if (!user) {
    res.status(404).json({ message: 'Нет пользователя с таким id' });
    return;
  }
  res.status(200).json(user);
});

getUsers.get('/', (req, res) => {
  res.json(users);
});

module.exports = getUsers;
