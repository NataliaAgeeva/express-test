const getCards = require('express').Router();
const cards = require('../data/cards');

getCards.get('/', (req, res) => {
  res.status(200).json(cards);
});

module.exports = getCards;
