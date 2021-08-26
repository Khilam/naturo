const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  { orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product',
      },
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
      },
    {
      timestamps: true,
    }
  ]
  }
);



 
  module.exports = mongoose.model("Order", paperSchema);