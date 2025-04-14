// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4200; 

app.use(express.static(path.join(__dirname, 'dist/catalogo-peliculas')));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/catalogo-peliculas/index.html'));
});

app.listen(PORT, () => {
  console.log(`started at port: ${PORT}`);
});