const express = require('express');
const app = express();
const PORT = 4000;

let rekap_penerimaan = [
  {
    id: 1,
    unit_kerja: 'KPP A',
    bruto: 1000000000,
    spmkp: 7500000,
    netto: 925000000,
  },
  {
    id: 2,
    unit_kerja: 'KPP B',
    bruto: 2000000000,
    spmkp: 7500000,
    netto: 192500000,
  },
  {
    id: 3,
    unit_kerja: 'KPP C',
    bruto: 3000000000,
    spmkp: 7500000,
    netto: 292500000,
  },
  {
    id: 4,
    unit_kerja: 'KPP D',
    bruto: 400000000,
    spmkp: 7500000,
    netto: 392500000,
  },
  {
    id: 5,
    unit_kerja: 'KPP E',
    bruto: 11000000000,
    spmkp: 7500000,
    netto: 1092500000,
  },
  {
    id: 6,
    unit_kerja: 'KPP F',
    bruto: 120000000000,
    spmkp: 7500000,
    netto: 1192500000,
  },
  {
    id: 7,
    unit_kerja: 'KPP G',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 8,
    unit_kerja: 'KPP H',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 9,
    unit_kerja: 'KPP I',
    bruto: 10000000000,
    spmkp: 7500000,
    netto: 992500000,
  },
  {
    id: 10,
    unit_kerja: 'KPP J',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
];

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
    id: 1,
    unit_kerja: 'KPP A',
    bulan: '4',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 1,
    unit_kerja: 'KPP A',
    bulan: '2',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 1,
    unit_kerja: 'KPP A',
    bulan: '3',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 2,
    unit_kerja: 'KPP B',
    bulan: '2',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 2,
    unit_kerja: 'KPP B',
    bulan: '1',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
  {
    id: 2,
    unit_kerja: 'KPP B',
    bulan: '3',
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
    id: 3,
    unit_kerja: 'KPP C',
    bulan: '2',
    bruto: 100000000,
    spmkp: 7500000,
    netto: 92500000,
  },
];

app.get('/', (req, res) => {
  res.send('Hey this is my API running..');
});
app.get('/api/penerimaan', (req, res) => {
  res.json(penerimaan);
});
app.get('/api/penerimaan/:id', (req, res) => {
  const { id } = req.params;
  const detail = penerimaan.filter((p) => p.id == id);
  if (detail) {
    res.json(detail);
  } else {
    res.status(404).send('data tidak ditemukan');
  }
});

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

// Export the Express API
module.exports = app;
