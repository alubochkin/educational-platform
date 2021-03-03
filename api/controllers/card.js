const Card = require('../models/cards');
const Basket = require('../models/basket');

const getAddForm = (req, res) => res.render('additem.hbs');

const setAddCard = async (req, res) => {
  const {
    art, title, description, photolink, price, quantity,
  } = req.body;
  try {
    const card = await Card.create({
      art,
      title,
      description,
      photolink,
      price,
      quantity,
    });
    return res.status(200).json({ card });
  } catch (err) {
    return res.status(500).json({ error: 'Err' });
  }
};

const getFormBuy = async (req, res) => {
  const card = await Card.findById(req.params.id).lean();
  // eslint-disable-next-line no-underscore-dangle
  res.render('shoppingcard.hbs', { id: card._id, title: card.title, price: card.price });
};

const addCardUser = async (req, res) => {
  const { id, quantity } = req.body;
  try {
    let basket;
    const card = await Card.findById(id).lean();
    const basketUser = await Basket.findOne({ userid: res.locals.userid, cardid: id }).lean();
    if (basketUser) {
      const count = basketUser.quantitySum + quantity;
      const sum = card.price * count;
      // eslint-disable-next-line no-underscore-dangle
      basket = await Basket.findOneAndUpdate({ _id: basketUser._id },
        { $set: { quantitySum: count, priceSum: sum } });
    } else {
      basket = await Basket.create({
        userid: res.locals.userid,
        cardid: id,
        priceSum: card.price,
        quantitySum: quantity,
      });
    }
    return res.status(200).json({ basket });
  } catch (err) {
    return res.status(500).json({ error: 'Err' });
  }
};
module.exports = {
  getAddForm, setAddCard, getFormBuy, addCardUser,
};
