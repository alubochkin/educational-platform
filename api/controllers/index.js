const Card = require('../models/cards');

const getCardList = async (req, res) => { const cards = await Card.find().lean(); res.render('allitems.hbs', { cards }); };

module.exports = { getCardList };
