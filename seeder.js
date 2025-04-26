const mongoose = require('mongoose');
const Produk = require('./models/Produk');

mongoose.connect('mongodb://localhost:27017/pembayaran', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('🟢 Terhubung ke MongoDB');
  return Produk.insertMany([
    {
      nama: 'iPhone 16',
      harga: 629999,
      gambar: 'c:\Users\hp\OneDrive\文档\website ku\iphone_16_plus_ultramarine_01_2.jpg',
      spesifikasi: 'RAM 8GB, Kamera 50MP, Baterai 4000mAh'
    },
    {
      nama: 'iPhone 11 ProMax',
      harga: 589999,
      gambar: 'c:\Users\hp\OneDrive\文档\website ku\iPhone-11-ProMax-600x771.png',
      spesifikasi: 'RAM 4GB, Kamera 12MP, Baterai 3969mAh'
    },
    {
        nama: 'iPhone 13 Promax',
        harga: 629999,
        gambar: 'c:\Users\hp\OneDrive\文档\website ku\iPhone-13-Pro-Max-600x771.png',
        spesifikasi: 'RAM 6GB, Kamera 12MP, Baterai 4352mAh'
    },





  ]);
}).then(() => {
  console.log('✅ Produk berhasil disimpan!');
  mongoose.disconnect();
}).catch(err => {
  console.error('❌ Error:', err);
});
