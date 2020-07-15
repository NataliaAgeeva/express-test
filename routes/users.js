const getUsers = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

const filePath = path.resolve('data', 'users.json');

getUsers.get('/:id', (req, res) => {
  fs.readFile(filePath)
    .then((data) => {
      const userArray = JSON.parse(data);
      const user = userArray.find(({ _id: id }) => id === req.params.id);
      if (!user) {
        res.status(404).json({ message: 'Нет пользователя с таким id' });
      }
      res.status(200).send(user);
    })
    .catch(() => {
      res.status(500).json({ message: 'Запрашиваемый файл не найден' });
    });
});

getUsers.get('/', (req, res) => {
  fs.readFile(filePath)
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).json({ message: 'Запрашиваемый файл не найден' });
    });
});

module.exports = getUsers;
