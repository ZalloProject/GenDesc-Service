require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

const houseSchema = mongoose.Schema({
  _id: Number,
  address: String,
  price: Number,
  beds: Number,
  baths: Number,
  floorSize: Number,
  description: String,
  type: String,
  year: Number,
  heating: String,
  cooling: String,
  parking: Number,
  lotSize: Number,
  daysListed: Number,
  saves: Number,
});
module.exports = {
  House: mongoose.model('House', houseSchema),
  House_test: mongoose.model('House_test', houseSchema),
}
