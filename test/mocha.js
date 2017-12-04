const {should, expect, assert} = require('chai');
const {add, mul} = require('../src/math');

describe('#math', () => {
    describe('add', () => {
        it('should return 5 when add(2,3)', () => {
            expect(add(2,3), 5);
        });
        it('should return 7 when add(3,4)', () => {
            expect(add(3,4), 7);
        });
    });

    describe('mul', () => {
        it('should return 6 when add(2,3)', () => {
            expect(mul(2,3), 6);
        });
        it('should return 12 when add(3,4)', () => {
            expect(mul(3,4), 12);
        });
    });
});
