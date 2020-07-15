const getCards = require('express').Router();
const fs = require('fs').promises;
const path = require('path');

getCards.get('/', (req, res) => {
  const filePath = path.resolve('data', 'cards.json');
  fs.readFile(filePath)
    .then((data) => {
      res.status(200).send(JSON.parse(data));
    })
    .catch(() => {
      res.status(500).json({ message: 'Запрашиваемый файл не найден' });
    });
});

module.exports = getCards;
