// const assert = require('assert');
const {should, expect, assert} = require('chai');
const {add, mul} = require('../src/math');

should();

mul(2,3).should.equal(6);

expect(add(1,2)).equal(3);

expect(add(1,2)).to.be.a('number');

assert.equal(add(1,2),3);