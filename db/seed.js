require('dotenv').config();
const fs = require('fs');
const path = require('path');

module.exports = (model, callback) => {
  fs.readFile(path.join(__dirname, '../sample-data/sample-data.json'), (err, data) => {
    sampleData = JSON.parse(data.toString());
    model.create(sampleData, (err, data) => {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      }
    });
  });
}
