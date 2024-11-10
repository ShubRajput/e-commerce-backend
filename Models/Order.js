import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true },
    }],
    totalAmount: { type: Number, required: true },
    status: { type: String, default: 'pending' }, // pending/processed/shipped/delivered
    paymentStatus: { type: String, default: 'unpaid' }, // unpaid/paid
  }, { timestamps: true });
  
  export const Order = mongoose.model('Order', orderSchema);
  