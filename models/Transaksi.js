const mongoose = require('mongoose');

const TransaksiSchema = new mongoose.Schema({
  order_id: String,
  nama: String,
  email: String,
  produk: String,
  harga: Number,
  status: { type: String, default: 'pending' },
  snapToken: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaksi', TransaksiSchema);
