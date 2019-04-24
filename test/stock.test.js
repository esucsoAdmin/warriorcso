process.env.NODE_ENV = 'test';

// Importing Dependencies
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const app = require('../app');

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

  describe('GET /stock/allItems', () => {
    it('should GET /allItems and return at least 1 Item', (done) => {
      chai.request(app)
        .get('/stock/allItems')
        .end((err,res) => {
          res.should.have.status(200);
          // res.body.name.should.equal('ANAME');
        done();
        })
        });
    });
  });

describe('/stock/getItem', () => {
  // Empty database before each test
  // beforeEach((done) => {
  //   Item.remove({}, (err) => {
  //   done(); 
  //   });
  // });

  describe('GET /stock/getItem - name = ANAME', () => {
    it('should GET item name: "ANAMEs"', () => {
      chai.request(app)
        .get('/stock/getItem', (req,res) => {
          name: 'ANAMEs'
        })
        .end((err,res) => {
          res.should.have.status(200);
          // res.body.name.should.equal('ANAME');
        done();
        });
    });
  });
});

