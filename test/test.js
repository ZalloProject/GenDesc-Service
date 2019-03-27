const {expect} = require('chai');
const House = require('../db/index');
const fs = require('fs');
const path = require('path');
const createSampleFile = require('../sample-data/generate');
require('../db/seed');

describe('Sample Data', function() {
  describe('Generate Sample Data Function', function() {
    it('should create a json file with sample data', function() {
      fs.unlink(path.join(__dirname, '../sample-data/sample-data.json'), (err, data) => {
        createSampleFile((err, success) => {
          fs.readFile(path.join(__dirname, '../sample-data/sample-data.json'), (err, data) => {
            let sampleData = JSON.parse(data.toString());
            expect(sampleData.length > 0).to.be.true;
          });
        });
      });
    });
  });
});

describe('Database', function() {
  describe('House Model', function() {
    it('should be filled with sample data', function() {
      House.find({}, (err, docs) => {
        expect(docs.length !== 0).to.be.true;
      });
    });
  });
});