'use strict';

var Matrix = require('../..');

describe('Matrix views', function () {
    describe('Row view', function () {
        it('should set and get column values', function () {
            var m = Matrix.ones(5, 8);
            var mrv1 = m.rowView(0);
            var mrv2 = m.rowView(3);

            m.set(0, 3, 5);
            m.set(2, 2, 12);
            m.set(3, 4, 10);

            mrv1.get(0, 3).should.equal(5);
            mrv2.get(0, 3).should.equal(1);

            mrv1.get(2, 2).should.equal(1);
            mrv2.get(2, 2).should.equal(1);

            mrv1.get(3, 4).should.equal(1);
            mrv2.get(3, 4).should.equal(10);

            mrv1.to1DArray().should.eql([1, 1, 1, 5, 1, 1, 1, 1]);
            mrv2.to1DArray().should.eql([1, 1, 1, 1, 10, 1, 1, 1]);

            mrv1.isRowVector().should.be.true();
            mrv2.isRowVector().should.be.true();
        });
    });
});
