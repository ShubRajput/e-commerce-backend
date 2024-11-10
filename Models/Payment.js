const paymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    paymentMethod: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: 'pending' }, // pending/completed/failed
  }, { timestamps: true });
  
  export const Payment = mongoose.model('Payment', paymentSchema);
  