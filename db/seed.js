// seed database with sample data;

const House = require('./index');
const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../sample-data/sample-data.json'), (err, data) => {
  sampleData = JSON.parse(data.toString());
  sampleData.forEach(record => {
    House.create(record);
  });
});
