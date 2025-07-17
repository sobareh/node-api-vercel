const express = require('express');
const app = express();
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

let penerimaan = [
  {
    id: 1,
    unit_kerja: 'KPP A',
    bulan: '1',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 2,
    unit_kerja: 'KPP B',
    bulan: '4',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 3,
    unit_kerja: 'KPP C',
    bulan: '1',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 4,
    unit_kerja: 'KPP D',
    bulan: '3',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 5,
    unit_kerja: 'KPP E',
    bulan: '2',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
];

app.get('/', (req, res) => {
  res.send('Hey this is my API running..');
});
app.get('/penerimaan', (req, res) => {
  res.json(penerimaan);
});
app.get('/penerimaan_detail', (req, res) => {
  res.send('This is my about route..... ');
});

// Export the Express API
module.exports = app;
