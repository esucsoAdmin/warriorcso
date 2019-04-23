process.env.NODE_ENV = 'test';

// Importing Dependencies
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

// Item Model
const Item = require('../models/StockItem');

chai.use(chaiHttp);

describe('/stock/getItem', () => {
  // Empty database before each test
  // beforeEach((done) => {
  //   Item.remove({}, (err) => {
  //   done(); 
  //   });
  // });

  describe('GET /stock/getItem - name = ANAME', () => {
    it('should GET ', () => {
      
    });
  });
});

