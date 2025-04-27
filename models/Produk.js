const mongoose = require('mongoose');

const ProdukSchema = new mongoose.Schema({
  nama: String,
  harga: Number,
  gambar: String,
  spesifikasi: String
});

module.exports = mongoose.model('Produk', ProdukSchema);
