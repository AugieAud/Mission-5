//define the structure of the data. Schema = blueprint

const mongoose = require("mongoose");

//create a new schema containing the 4 fields that each documentaion in the collection must have, title, description, start price and reserve price
const auctionItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  start_price: { type: Number, required: true },
  reserve_price: { type: Number, required: true },
});

module.exports = mongoose.model(
  "auctionItem",
  auctionItemSchema,
  "auction_items"
);
